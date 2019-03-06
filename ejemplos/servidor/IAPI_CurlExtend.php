<?php
define("POST", 0);
define("GET",  1);
define("PUT",  2);

class IAPI_CurlException extends Exception
{
	const RS_FALSE = 1;
	const RS_EMPTY = 2;
	const RS_ECODE = 3;
}


/**
 * In this class group rutines for log the curl status from execute with curl_exec.
 * 
 * The definitions are based in distinct development of web services and knowledege of distinct references, 
 * in case of add changes document this.
 * 
 * @author Ricardo Bermudez Bermudez <rbermudez@mig.com.mx>
 * ( This class is a recopilation of methods from other authors: )
 * @author Jorge Kaplun Arciniega		<jkaplun@mig.com.mx>
 * @author Steve Montiel				<smontiel@mig.com.mx>
 * ( and more.) 
 * 
 * @link https://www.gitbook.com/download/pdf/book/bagder/everything-curl
 * @link https://curl.haxx.se/
 * 
 * @package library_IntegrationAPI
 * */
class IAPI_CurlExtend{

	private
		$lastRequest,
		$lastResponse,
		$lastConnectionLog,
		$lastHttpCodeReceived,
		$curl,
		$url,
		$typeRequest,
		$timeOut,
		$returnCurl,
        $httpHeadersArray;



	/**
	 * With this function set IAPI_CurlExtend::curl with curl_setopt_array.
	 * 
	 * @api
	 * 
	 * @author	Ricardo Bermudez Bermudez <rbermudez@mig.com.mx>
	 * 
	 * @link	http://php.net/manual/es/function.curl-setopt-array.php
	 * @link	http://php.net/manual/es/function.curl-setopt.php
	 * 
	 * @param	array	$curl_opts	This array settings of curl, is add to cURL resource with curl_setopt_array, view more in the second link of this description.
	 * @param	array	$rpc_opts	Asociative array with initial settings of RPC; the <b>'url_point'</b> index contains a URL string that use as URL point(CURLOPT_URL),
	 * 								the <b>'connection_timeout'</b> index contains the maximum number of seconds to allow cURL functions to execute (CURLOPT_TIMEOUT),
	 * 								the <b>'return_curl'</b> index is a boolean value to set if RPC is execute on cURL resource with IAPI_CurlExtend::curl_exec() and this
	 * 								function return the response (in case of 'return_curl'=>true) or IAPI_CurlExtend::curl_exec() return cURL resource to execute in other
	 * 								subroutine ('return_curl'=>false) and <b>'http_request_method'</b> set witch HTTP request method is uses in cURL (set CURLOPT_POST).
	 * 
	 * @throws	IAPI_CurlException If isn't provided 'http_request_method' or 'url_point' indexes in $rpc_opts array.
	 * @throws	IAPI_CurlException If errors occur to set cURL Resource with curl_setopt_array().
	 * @throws	IAPI_CurlException If errors occur to init cURL resource with curl_init().
	 * 
	 * @return void 
	 */
	public function __construct($curl_opts, $rpc_opts){
		$this->curl = curl_init();
		if($this->curl===false){
			throw new IAPI_CurlException('Errors to init cURL resource with curl_init().',0);
		}
		
		if(!empty($rpc_opts['url_point'])){
			$this->url  = $rpc_opts['url_point'];
			$curl_opts[CURLOPT_URL] = $rpc_opts['url_point'];
			
		}else{
			throw new IAPI_CurlException('URL not defined.',0);
		}
		
		/**It is needed define witch HTTP request method is use in the connection.*/
		if(isset($rpc_opts['http_request_method'])){
			$this->typeRequest = $rpc_opts['http_request_method'];
		}else{
			throw new IAPI_CurlException('HTTP Request method not defined.',0);
		}
		
		
		$this->timeOut = -1;
		if(array_key_exists('connection_timeout', $rpc_opts)){
			$this->timeOut = $rpc_opts['connection_timeout'];
			$curl_opts[CURLOPT_TIMEOUT] = $this->timeOut;
		}
		
		$this->cleanHttpHeader = FALSE;
		if(array_key_exists(CURLOPT_HEADER, $curl_opts)){
			$this->cleanHttpHeader = $curl_opts[CURLOPT_HEADER];
		}
		
		$set_curl = curl_setopt_array($this->curl, $curl_opts);
		if($set_curl===false){
			throw new IAPI_CurlException('Errors to set cURL Resource with curl_setopt_array(). Check the configuration array ($curl_opts).',0);
		}
		
		/**set if return curl in curl_exec() or execute RPC.*/
		$this->returnCurl = !empty($rpc_opts['return_curl']) ? $rpc_opts['return_curl'] : false;
	}



	/**
	 * Execute curl, when returnCurl is false IAPI_CurlExtend::curl_exec() execute request and log the all status form cURL resource, 
	 * you can use the IAPI_CurlExtend::__getLastRequest(), IAPI_CurlExtend::__getLastResponse() and IAPI_CurlExtend::__getLastConnectionLog
	 * for recover logs of curl_exec(). When returnCurl is true return the cURL resource for use in other subroutine.
	 * 
	 * @api
	 * 
	 * @author	Ricardo Bermudez Bermudez <rbermudez@mig.com.mx>
	 * 
	 * @param	string $request Request string to set curl.
	 * 
	 * @throws	IAPI_CurlException if response of curl_exec on cURL resource is false or empty(uses empty() function to validate response).
	 * @throws	IAPI_CurlException if CURLINFO_HTTP_CODE is different of 200.
	 * 
	 * @return string|resource Response from curl_exec or IAPI_CurlExtend::curl attribute.
	 */
	public function curl_exec($request){
		$this->lastRequest			= $request;
		
		$flgInit = false;
		switch($this->typeRequest){
			case POST:
				$flgInit = curl_setopt($this->curl, CURLOPT_POST, 1);
				$flgInit = curl_setopt($this->curl, CURLOPT_POSTFIELDS, $request);
				break;
			case GET:
				$flgInit = curl_setopt($this->curl, CURLOPT_URL, $this->url.'?'.$request);
				break;
			case PUT:
				/**
				 * If need create HTTP PUT request add the general settings here
				 */
			break;
		}
		if (!$flgInit) {
			throw new IAPI_CurlException('Errors to set cURL Resource with curl_setopt. Check the configuration of curl.',0);
		}
		if($this->returnCurl){
			return $this->curl;
		}
		
		$this->lastResponse			= curl_exec($this->curl);
		$this->lastConnectionLog	= $this->setCurlLog();
		$this->lastHttpCodeReceived = curl_getinfo($this->curl , CURLINFO_HTTP_CODE);
		
		if( $this->lastResponse===false ){
			throw new IAPI_CurlException('The curl_exec() function on cURL resource return false.',IAPI_CurlException::RS_FALSE);
		}
		if( empty($this->lastResponse) ){
			throw new IAPI_CurlException('The response is empty.',IAPI_CurlException::RS_EMPTY);
		}
		
		if($this->cleanHttpHeader===TRUE && substr($this->lastResponse,0,4) == "HTTP"){
			list($http_headers, $response, $http_header_str) = $this->getHttpHeaders($this->lastResponse);
            
            $this->httpHeadersArray = $http_headers;
            
			if( empty($response) ){
				throw new IAPI_CurlException('The response is empty.',IAPI_CurlException::RS_EMPTY);
			}
			$this->lastResponse = $response;
			$this->lastConnectionLog .= $http_header_str;
		}
		
		if($this->lastHttpCodeReceived != 200 ){
			throw new IAPI_CurlException('HTTP error code returned by curl_exec(). The error code is: -'.$this->lastHttpCodeReceived.'-.',IAPI_CurlException::RS_ECODE);
		}
		
		/**
		 * In case to fall check the compression header log
		 */
		$this->lastConnectionLog .= $this->logCompressionHeader(substr($this->lastResponse,0,10));
		
		$data_inf = @gzinflate(substr($this->lastResponse,10));
		if($data_inf!==false){
			$this->lastResponse = $data_inf;
		}
		
		return $this->lastResponse;
	}


    /**
     * With this function uncompress data. On this momento only uncompresss gzip
     * data format.
     * 
     * @author Ricardo Bermudez Bermudez <rbermudez@mig.com.mx>
     * 
     * @param string $data Data to inflate in GZIP Format, pass by reference.
     * 
     * @link https://tools.ietf.org/html/rfc1952 GZIP file format specification version 4.3
     * 
     * @return void
     * 
     */
    public static function unCompressData(&$data)
    {
        @$data_inf = gzinflate(substr($data,10));
        
        if ($data_inf!==false) {
            $data = $data_inf;
        }
    }
    
    /**
     * Process response from any HTTP client.
     * 
     * @author Ricardo Bermudez Bermudez <rbermudez@mig.com.mx>
     * 
     * @param string $response string with HTTP response, the response can have HTTP headers,
     *                         pass by reference.
     * 
     * @return string response without HTTP headers and uncompresed
     */
    public static function processsHttpResponse(&$response)
    {
        if (substr($response,0,4) == "HTTP") {
            $response = IAPI_CurlExtend::getHttpHeaders($response)[1];
        }
        
        IAPI_CurlExtend::unCompressData($response);
    }
    
	/**
	 *	Set the curl connexion log.
	 *
	 *	@author Ricardo Bermudez Bermudez <rbermudez@mig.com.mx>
	 *
	 *	@return string
	 */
	public function setCurlLog(){
		$lastConnectionLog = "Estatus reportado por los parametros de cURL:\n";
		$lastConnectionLog .= "-URL de solicitud: ".$this->url."\n";
		$lastConnectionLog .= "-Timeout de conexion: ".$this->timeOut."\n";
		$lastConnectionLog .= "-Ultimo codigo HTTP devuelto(CURLINFO_HTTP_CODE)-> ".curl_getinfo($this->curl,CURLINFO_HTTP_CODE)."\n";
		$lastConnectionLog .= "-Tiempo total de ejecucion de la comunicacion en segundos (CURLINFO_TOTAL_TIME)-> ".curl_getinfo($this->curl,CURLINFO_TOTAL_TIME )."\n";
		$lastConnectionLog .= "-Tiempo para establecer la conexion en segundos (CURLINFO_CONNECT_TIME)-> ".curl_getinfo($this->curl,CURLINFO_CONNECT_TIME)."\n";
		$lastConnectionLog .= "-Tamano de la descarga en bytes (CURLINFO_SIZE_DOWNLOAD)-> ".curl_getinfo($this->curl,CURLINFO_SIZE_DOWNLOAD )."\n";
		$lastConnectionLog .= "-Tamano de la cabecera devuelta en bytes (CURLINFO_HEADER_SIZE)-> ".curl_getinfo($this->curl,CURLINFO_HEADER_SIZE)."\n";
		$lastConnectionLog .= "-Codigo de error (CURL_ERRNO)-> ".curl_errno($this->curl)."\n";
		$lastConnectionLog .= "-Mensaje de error (CURL_ERROR)-> ".curl_error($this->curl)."\n";
		
		return $lastConnectionLog;
	}



	/**
	 * Return HTTP array with HTTP Headers as fields and response by separated. Is used when CURLOPT_HEADER in curl options array is TRUE.
	 * 
	 * @author Ricardo Bermudez Bermudez (Original idea by Steve Montiel) <rbermudez@mig.com.mx; smontiel@mig.com.mx>
	 * 
	 * @param string $raw_response String with curl response
	 * 
	 * @return array 
	 */
	public static function getHttpHeaders($raw_response){
		$http_headers = [];
		$http_headers_str = "\nCabeceras HTTP:\n";
		
		while(substr($raw_response,0,4) == "HTTP"){
			list($raw_header, $raw_response) = explode("\r\n\r\n", $raw_response, 2);
			
			$http_headers_str .= $raw_header."\n";
			
			$cut_headers = explode("\r\n", $raw_header);
			foreach($cut_headers as $http_row){
				$cut_row = explode(":", $http_row, 2);
                if (!empty($http_headers[$cut_row[0]])) {
                    $http_headers[$cut_row[0]] .= ';' . trim(@$cut_row[1]);
                } else {
                    $http_headers[$cut_row[0]] = trim(@$cut_row[1]);
                }
				
			}
		}
		
		return [$http_headers, $raw_response, $http_headers_str];
	}



	/**
	 * Generates the compression header log of http socket response, checking the fields describes in the RFC1952.
	 * 
	 * @since Feb,13 2017
	 * 
	 * @author	Ricardo Bermudez Bermudez <rbermudez@mig.com.mx>
	 * @link	https://tools.ietf.org/html/rfc1952
	 * 
	 * @param	string $cmp_header String with 10 bytes of compression header
	 * 
	 * @return	string
	 */
	public function logCompressionHeader($cmp_header) {
		$cmp_log = "\nCabeceras de compresion HTTP:\n";
		
		$warning = ord($cmp_header[0])==31 ? "Correcto":"Incorrecto";
		$cmp_log .= "-ID1: ".$warning.",".$cmp_header[0]."\n";/* 31 0x1f*/
		
		$warning = ord($cmp_header[1])==139 ? "Correcto":"Incorrecto";
		$cmp_log .= "-ID2: ".$warning."\n";/* 139 0x8b, That value not is saved because in xml_request_response table not support for that character value*/
		
		$warning = "Incorrecto";
		$warning = ord($cmp_header[2])>=0 || ord($cmp_header[2])<=7 ? "Valor Reservado":$warning;
		$warning = ord($cmp_header[2])==8 ? "Deflate/Gzip":$warning;
		$cmp_log .= "-CM: ".$warning.",".$cmp_header[2]."\n"; /* 0-7 are reserved, 8 deflate/gzip compression method*/
		
		$flag_reg = $this->complement(decbin(ord($cmp_header[3])),8);
		$cmp_log .= "-FLAG BYTE:\n";/*{1,0}*/
		$cmp_log .= "---FTEXT:    ".$flag_reg[7]."\n";
		$cmp_log .= "---FHCRC:    ".$flag_reg[6]."\n";
		$cmp_log .= "---FEXTRA:   ".$flag_reg[5]."\n";
		$cmp_log .= "---FNAME:    ".$flag_reg[4]."\n";
		$cmp_log .= "---FCOMMENT: ".$flag_reg[3]."\n";
		$cmp_log .= "---reserved: ".$flag_reg[2]."\n";/*0*/
		$cmp_log .= "---reserved: ".$flag_reg[1]."\n";/*0*/
		$cmp_log .= "---reserved: ".$flag_reg[0]."\n";/*0*/
		
		$mtime =
		$this->complement(decbin(ord($cmp_header[7])),8).
		$this->complement(decbin(ord($cmp_header[6])),8).
		$this->complement(decbin(ord($cmp_header[5])),8).
		$this->complement(decbin(ord($cmp_header[4])),8);
		$cmp_log .= "-MTIME (UNIX TIME): ".bindec($mtime)."\n";
		
		$cmp_alg = [2=>'El compresor utilizo la maxima compresion (Algoritmo Deflate mas lento)',
					4=>'El compresor utilizo la compresion mas rapida'];
		if(ord($cmp_header[2])==8 && array_key_exists(ord($cmp_header[8]),$cmp_alg)){
			$warning = $cmp_alg[ord($cmp_header[8])];
		}else{
			$warning = "Incorrecto";
		}
		$cmp_log .= "-XFL: ".$warning.",".$cmp_header[8]."\n";
		
		$os=[0  => 'FAT filesystem (MS-DOS, OS/2, NT/Win32)',
			 1  => 'Amiga',
			 2  => 'VMS (or OpenVMS)',
			 3  => 'Unix',
			 4  => 'VM/CMS',
			 5  => 'Atari TOS',
			 6  => 'HPFS filesystem (OS/2, NT)',
			 7  => 'Macintosh',
			 8  => 'Z-System',
			 9  => 'CP/M',
			10  => 'TOPS-20',
			11  => 'NTFS filesystem (NT)',
			12  => 'QDOS',
			13  => 'Acorn RISCOS',
			255 => 'unknow'];
		$warning = array_key_exists(ord($cmp_header[9]),$os)? $os[ord($cmp_header[9])]:"Incorrecto";
		$cmp_log .= "-OS: ".$warning.",".$cmp_header[9]."\n";
		
		return $cmp_log;
	}



	/**
	 * This function adds '0' characters to left of the word.
	 * 
	 * @author Ricardo Bermudez Bermudez <rbermudez@mig.com.mx>
	 * 
	 * @param	string	$str	Original String
	 * @param	int	 	$ind_c	Index to limit '0' adds 
	 * 
	 * @return	string
	 */
	public function complement($str,$ind_c){
		$bl = strlen($str);
		if($ind_c>=$bl){
			$add = $ind_c-$bl;
			$zeros = '';
			for($i=1; $i<=$add; $i++){
				$zeros .= '0';
			}
			return $zeros.$str;
		}
		return $str;
	}



	/**
	 * Return the last request send with curl_exec on cURL resource.
	 * 
	 * @author Ricardo Bermudez Bermudez <rbermudez@mig.com.mx>
	 * 
	 * @return string Last request executed
	 */
	public function __getLastRequest(){
		return $this->lastRequest;
	}



	/**
	 * Return the last response received from curl_exec().
	 * 
	 * @author Ricardo Bermudez Bermudez <rbermudez@mig.com.mx>
	 * 
	 * @return string Last response received
	 */
	public function __getLastResponse(){
		if($this->returnCurl){
			return $this->curl;
		}
		return $this->lastResponse;
	}



	/**
	 * Return the list of code states from cURL resource before curl_exec() has executed. 
	 * 
	 * @author Ricardo Bermudez Bermudez <rbermudez@mig.com.mx>
	 * 
	 * @return string Last conexion log
	 */
	public function __getLastConnectionLog(){
		return $this->lastConnectionLog;
	}
    
    /**
     * Return HTTP Headers parsed as an array.
     * 
     * @author Ricardo Bermúdez Bermúdez <ricardob.sistemas@gmail.com>
     * @return array Parsed http headers returned in response from server.
     */
     public function __getHttpHeadersArray()
     {
        return $this->httpHeadersArray;
     }
}