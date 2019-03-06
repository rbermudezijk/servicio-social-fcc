/**
 * #Autor              -> Ricardo Bermúdez Bermúdez
 * #Correo electrónico -> ricardob.sistemas@gmail.com
 * #Fecha de creación  -> 19 de febrero del 2018
 * 
 * Representa la barra de navegación principal de la aplicación.
 * Para mandar este componente a llamar en el código fuente HTML
 * utilicese la etiqueta <barra-de-navegacion>.
 */
export class BarraDeNavegación extends HTMLElement {
  constructor() {
    super();
    this.DOMRaiz = this.attachShadow({mode: 'open'});
    this.DOMRaiz.innerHTML  = _estilos;
    this.DOMRaiz.innerHTML += _plantilla;
  }
}

let _plantilla = `
  <nav class="barra-de-navegación">
    <a>Proceso</a>
    <a>Informes</a>
    <a>Vacantes</a>
    <a>Asesoría</a>
  </nav>`;

let _estilos = `
  <style>
  /***********************************\
   *   1 - BARRA DE NAVEGACIÓN       *
  \***********************************/
  .barra-de-navegación {
    /**
     * 1.1 - Constantes.
     */
    --color-de-fondo:     var(--color-principal,  rgb(0,59,92));
    --color-de-borde:     var(--color-secundario, rgb(0, 181, 226));
    --color-de-etiquetas: var(--texto-principal,  #fff);

    /**
     * 1.2 - Posicionamiento.
     */
    width: 100%;
    height: 100%;

    /**
     * 1.3 - Diseño.
     */
    background: var(--color-de-fondo);
    box-shadow: 0 5px 8px rgba(0,0,0,0.19),
                0 2px 6px rgba(0,0,0,0.23);
  
    /**
     * 1.4 - Estructura interna.
     */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  
  /************************************************\
   *   2 - Etiquetas de la barra de navegación    *
  \************************************************/
  .barra-de-navegación a{
    /**
     * 2.1 - Posicionamiento y tamaño.
     */
    height: 100%;
    padding: 0 26px;
    box-sizing: border-box;

    /**
     * 2.2 - Diseño de fuente.
     */
    color: var(--color-de-etiquetas);
    font-size: 12.5pt;
    letter-spacing: 0;
    font-family:  'Arial';
    font-weight: bold;
    user-select: none;
    -moz-user-select: none;

    /**
     * 2.3 - Diseño de borde inferior.
     */
    border-bottom-width: 2.95pt;
    border-bottom-color: transparent;
    border-bottom-style: solid;
    transition: border-bottom-color 0.4s ease-in-out;

    /**
     * 2.4 Estructura interna (Posicionamiento de texto interior).
     */
    display: flex;
    align-items: center;
  }
  
  /**
   * 2.5 - Transición de borde inferior.
   */
  .barra-de-navegación a:hover{
    border-bottom-color: rgb(0,181,226);
    cursor: pointer;
  }
  </style>`;