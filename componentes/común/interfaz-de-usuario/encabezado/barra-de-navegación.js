import { ComponenteWeb } from "../../núcleo/componente-web.js";

export class BarraDeNavegación extends ComponenteWeb {}

BarraDeNavegación.prototype.__plantillaHTML = () => `
  <nav>
    <a class="-activado">Inicio</a>
    <a>Informes</a>
    <a>Vacantes</a>
    <a>Asesoría</a>
  </nav>
`;

BarraDeNavegación.prototype.__estilos = () => `
  /**
   * 1- Barra de navegación.
   * 
   * [A] Ocupa todo el alto del elemento que contiene la barra de navegación
   *     (fcc.ssc.barra-de-navegacion) para que al definir el posicionamiento
   *     de los elementos internos como "flex" estos se adapten a la altura
   *     ya que por defecto align-text se define "stretch".
   * 
   * [B] Posicionamiento de los elementos internos.
   */
  nav {
    --texto-de-etiquetas--color: var(--texto-de-encabezado--color, #fff);
    --color-de-borde:            var(--color-secundario, rgb(0, 181, 226));

    height: 100%;  /* [A] */
    display: flex; /* [B] */
  }
  
  /**
   * 2- Etiquetas de la barra de navegación
   * 
   * [A] Posicionamiento y tamaño.
   * [B] Diseño de fuente.
   */
  nav a{
    /* [A] */
    padding: 0 20px;
    box-sizing: border-box;
  
    /* [B] */
    color: var(--texto-de-etiquetas--color);
    font-size: 21.5px;
    letter-spacing: 0;
    font-family:  'Source Sans Pro Regular';
    font-weight: 400;
    user-select: none;
    -moz-user-select: none;
  
    /**
     * 2.3 - Diseño de borde inferior.
     */
    border-bottom: 5px transparent solid;
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
  nav a:hover,
  nav a.-activado{
    border-bottom-color: rgb(0,181,226);
    cursor: pointer;
  }
`