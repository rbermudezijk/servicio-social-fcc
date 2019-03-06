<?php
/**
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'X-Apple-Tz: 0',
    'X-Apple-Store-Front: 143444,12'
))
*/

//General
// $url = 'http://webserver1.siiaa.siu.buap.mx:81/autoservicios/twbkwbis.P_WWWLogin';
// $ch = curl_init();
// curl_setopt($ch, CURLOPT_URL, $url);
// curl_setopt($ch, CURLOPT_HEADER, true);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
 
// echo curl_exec($ch);

//Sesion
//$url = 'http://webserver1.siiaa.siu.buap.mx:81/autoservicios/twbkwbis.P_ValLogin';
//$ch = curl_init();
//curl_setopt($ch, CURLOPT_URL, $url);
//curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
//curl_setopt($ch, CURLOPT_HEADER, true);
//curl_setopt($ch, CURLOPT_COOKIE, 'TESTID=set;TS01b954cd=01814053e70d1b3490b4fb5e1b8d7b32d8abd7bd1f92ad6f819710f244a4a5c172d0f6c36881b0b26e904f5728f7f7a0b6d88899b65f2227871a86f62ac046439c3409ad5f;');
//curl_setopt($ch, CURLOPT_POSTFIELDS, 'sid=200927847&PIN=21597838i&txtInput=16181');
//
//echo curl_exec($ch);

//Kardex
//$url = 'http://webserver1.siiaa.siu.buap.mx:81/autoservicios/bzskarlc.p_select_levl?v_val=E76775CBDC6A3AC25262829F27B0F001';
//$ch  = curl_init();
//curl_setopt($ch, CURLOPT_URL, $url);
//curl_setopt($ch, CURLOPT_HEADER, true);
//curl_setopt($ch, CURLOPT_COOKIE, 'SESSID=VlNUSUhYOTE2Nzg3NDE=;TS01b954cd=01814053e70d1b3490b4fb5e1b8d7b32d8abd7bd1f92ad6f819710f244a4a5c172d0f6c36881b0b26e904f5728f7f7a0b6d88899b65f2227871a86f62ac046439c3409ad5f;');
//echo curl_exec($ch);

//include_once 'IAPI_CurlExtend.php';

include_once 'IAPI_CurlExtend.php';

$urlInicial = 'http://webserver1.siiaa.siu.buap.mx:81/autoservicios/twbkwbis.P_WWWLogin';

$curl = new IAPI_CurlExtend([
    CURLOPT_HEADER         => true,
    CURLOPT_RETURNTRANSFER => true], [
    'http_request_method'  => GET,
    'url_point'            => $urlInicial ]);

$curl->curl_exec('');
$sessioCookie = $curl->__getHttpHeadersArray()['Set-Cookie'];

$urlSesion = 'http://webserver1.siiaa.siu.buap.mx:81/autoservicios/twbkwbis.P_ValLogin';
$curl = new IAPI_CurlExtend([
    CURLOPT_HEADER         => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_COOKIE         => 'TESTID=set;' . $sessioCookie], [
    'http_request_method'  => POST,
    'url_point'            => $urlSesion ]);

$curl->curl_exec('sid=200927847&PIN=21597838i&txtInput=16123');
print_r($curl->__getHttpHeadersArray());
echo ($curl->__getLastResponse());