import { ComponenteWeb } from '../__general/definiciones/componente-web.js';

/**
 * Autor:              Ricardo Bermúdez Bermúdez.
 * Correo electrónico: ricardob.sistemas@gmail.com
 * Fecha de creación:  7 de mayo del 2019.
 * 
 * Representa el componente de ensamble del módulo inicial de la aplicación.
 */
export class MóduloInicial extends ComponenteWeb {}

MóduloInicial.__etiqueta = 'fcc.ssc.modulo-inicial';

MóduloInicial.prototype.__plantillaHTML = () => `
  <main>
    <fcc.ssc.encabezado-principal></fcc.ssc.encabezado-principal>
    <fcc.ssc.proceso-de-certificacion></fcc.ssc.proceso-de-certificacion>
  </main>`;

MóduloInicial.prototype.__estilos = () => `
  /**
   * 1.- Contenedor principal del módulo.
   * 
   * [A] Tamaño y posicionamiento.
   * [B] Posicionamiento de los elementos internos (CSS Grid).
   */
  main {
    /** [A] */
    position: relative;
    width:  100vw;
    height: 100vh;
     
    /** [B] */
    display: grid;
    grid-template-areas: "encabezado" "contenido";
    grid-template-rows: 0.08fr 9.2fr;
    grid-template-columns: 1fr;
  }
  
  /**
   * 2.- Encabezado principal.
   */
  fcc\\.ssc\\.encabezado-principal {
    z-index: 2;
    grid-area: encabezado;
  }
  
  /**
   * 3.- Contenido del módulo.
   */
  fcc\\.ssc\\.proceso-de-certificacion {
    z-index: 1;
    grid-area: contenido;
  }`
