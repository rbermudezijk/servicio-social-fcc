import { ComponenteWeb } from "../../definiciones/componente-web.js";

/**
 * Autor:              Ricardo Bermúdez Bermúdez.
 * Correo electrónico: ricardob.sistemas@gmail.com
 * Fecha de creación:  30 de abril del 2019.
 * 
 * Representa la barra de navegación de la aplicación con los enlaces a los
 * módulos principales de la misma.
 */
export class BarraDeNavegación extends ComponenteWeb {}

BarraDeNavegación.__etiqueta = 'fcc.ssc.barra-de-navegacion';

BarraDeNavegación.prototype.__plantillaHTML = () => `
<nav>
  <a class="${location.hash.match('inicio')?'-activado':''}"
     href="#inicio">Inicio</a>
  <a class="${location.hash.match('informes')?'-activado':''}"
     href="#informes">Informes</a>
  <a class="${location.hash.match('vacantes')?'-activado':''}"
    href="#vacantes">Vacantes</a>
  <a class="${location.hash.match('contacto')?'-activado':''}"
    href="#contacto">Contacto</a>
</nav>`;

BarraDeNavegación.prototype.__estilos = () => `
  /**
   * 1.- Barra de navegación.
   * 
   * [A] Variables de acople.
   * 
   * [B] Ocupa todo el alto del elemento que contiene la barra de navegación
   *     (fcc.ssc.barra-de-navegacion) para que al definir el posicionamiento
   *     de los elementos internos como "flex" estos se adapten a la altura
   *     ya que por defecto align-text se define "stretch".
   * 
   * [C] Posicionamiento de los elementos internos (Flex).
   */
  nav {
    /** [A] */
    --texto-de-etiquetas--color: var(--texto-de-encabezado--color, #fff);
    --color-de-borde:            var(--color-secundario, rgb(0, 181, 226));

    height: 100%;  /* [B] */
    display: flex; /* [C] */
  }
  
  /**
   * 2.- Etiquetas de la barra de navegación.
   * 
   * [A] Posicionamiento y tamaño.
   * [B] Diseño de fuente.
   * [C] Diseño de borde inferior (Transición).
   * [D] Posicionamiento de texto internos.
   */
  nav a {
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
    text-decoration: none;
  
    /** [C] */
    border-bottom: 5px transparent solid;
    transition: border-bottom-color 0.4s ease-in-out;
  
    /** [D] */
    display: flex;
    align-items: center;    
  }
  
  /** 2.1.- Diseño de borde inferior activo. */
  nav a:hover,
  nav a.-activado {
    border-bottom-color: rgb(0,181,226);
    cursor: pointer;
  }
`