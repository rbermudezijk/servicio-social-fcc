import { ComponenteWeb } from "../../definiciones/componente-web.js";

/**
 * Autor:              Ricardo Bermúdez Bermúdez.
 * Correo electrónico: ricardob.sistemas@gmail.com
 * Fecha de creación:  30 de abril del 2019.
 * 
 * Representa la emblema de la Institución con el título de la secretaría
 * correspondiente.
 */
export class EmblemaFCC extends ComponenteWeb {}

EmblemaFCC.__etiqueta = 'fcc.ssc.emblema-fcc';

EmblemaFCC.prototype.__plantillaHTML = () => `
<h1>
  <fcc.ssc.figura-svg-emblema tamaño="60">
  </fcc.ssc.figura-svg-emblema>
  <div></div>
  <a>Servicio Social</a>
</h1>`;

EmblemaFCC.prototype.__estilos = () => `
  /**
   * 1. Contenedor principal del emblema.
   * 
   * [A] Variables de acople.
   * [B] Diseño del contenedor. Elimina margen por defecto del navegador para 
   *     etiquetas h1.
   * [C] Posicionamiento de elementos internos (Flex).
   */
  h1 {
    /** [A] */
    --color-de-titulo:  var(--texto-de-encabezado--color, #fff);
    --color-de-divisor: var(--color-de-institucion, #fff);

    /** [B] */
    margin: 0;

    /** [C] */
    display: flex;
    align-items: center;
  }

  /** 2.- Título del emblema. */
  a {
         user-select: none;
    -moz-user-select: none;
    color: var(--color-de-titulo);
  }
  
  /** 3.- Divisor. */
  div {
    width:   5px;
    height: 55px;
    display: inline-block;
    margin: 0 15px 0 10px;
    border-radius: 2px;
    background: var(--color-de-divisor);
  }
`;