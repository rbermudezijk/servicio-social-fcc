import { ComponenteWeb } from "../../definiciones/componente-web.js";

/**
 * Autor:              Ricardo Bermúdez Bermúdez
 * Correo electrónico: ricardob.sistemas@gmail.com
 * Fecha de creación:  19 de febrero del 2019.
 * 
 * Representa el encabezado principal de la aplicación compuesto de los
 * componentes <fcc.ssc.emblema-fcc> y <fcc.ssc.barra-de-navegacion>.
 */
export class EncabezadoPrincipal extends ComponenteWeb {}

EncabezadoPrincipal.__etiqueta = 'fcc.ssc.encabezado-principal';

EncabezadoPrincipal.prototype.__plantillaHTML = () => `
  <header>
    <fcc.ssc.emblema-fcc>
    </fcc.ssc.emblema-fcc>
    <fcc.ssc.barra-de-navegacion>
    </fcc.ssc.barra-de-navegacion>
  </header>`;

EncabezadoPrincipal.prototype.__estilos = () => `
  /**
   * 1.- Encabezado.
   * 
   * [A] Variables de acople y de configuración general.
   * 
   * [B] Ocupa el ancho y el alto total de su contenedor padre
   *     (fcc.ssc.encabezado-principal), puesto que el tamaño de
   *     este componente depende del diseño principal y es ajeno
   *     a su funcionamiento interno.
   * 
   * [C] Diseño de contenedor.
   * [D] Posicionamiento de elementos internos (Flex).
   */
  header {
    /** [A] */
    --color-de-fondo: var(--color-principal, rgb(0,59,92));
    --margen-lateral: 15px;

    /** [B] */
    width:  100%;
    height: 100%;

    /** [C] */
    background: var(--color-de-fondo);
    box-shadow: 0 5px 8px rgba(0,0,0,0.19),
                0 2px 6px rgba(0,0,0,0.23);
    
    /** [D] */
    display: flex;
  }

  /**
   * 2.- Emblema del encabezado.
   * 
   * [A] Dado que no existe una propiedad CSS como "justify-self" para
   *     posicionar los elementos sobre el eje principal del contenedor flex
   *     les necesario utilizar las propiedades margin-left o margin-right
   *     para inclinar el elemento hacia la izquierda o derecha según sea el
   *     caso.
   * 
   * [B] Centrar el elemento respecto al eje cruzado.
   */
  fcc\\.ssc\\.emblema-fcc {
    /** [A] */
    margin-left: var(--margen-lateral);

    /** [B] */
    align-self: center;
  }

  /**
   * 3.- Barra de navegación.
   */
  fcc\\.ssc\\.barra-de-navegacion {
    /** [2.A] */
    margin-right: var(--margen-lateral);
    margin-left: auto;
  }
`;
