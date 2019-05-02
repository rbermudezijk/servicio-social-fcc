import { ComponenteWeb } from "../../núcleo/componente-web.js";

/**
 * #Autor:              Ricardo Bermúdez Bermúdez
 * #Correo electrónico: ricardob.sistemas@gmail.com
 * #Fecha de creación:  19 de febrero del 2018.
 * 
 * Representa la barra de navegación principal de la aplicación.
 * Para mandar este componente a llamar en el código fuente HTML
 * utilicese la etiqueta <barra-de-navegacion>.
 */
export class Encabezado extends ComponenteWeb {}

Encabezado.prototype.__plantillaHTML = () => `
  <header>
    <fcc.ssc.emblema-fcc class="emblema">
    </fcc.ssc.emblema-fcc>
    <fcc.ssc.barra-de-navegacion class="barra">
    </fcc.ssc.barra-de-navegacion>
  </header>`;

Encabezado.prototype.__estilos = () => `
  header {
    --color-de-fondo: var(--color-principal, rgb(0,59,92));
    width:  100%;
    height: 100%;
    background: var(--color-de-fondo);
    box-shadow: 0 5px 8px rgba(0,0,0,0.19),
                0 2px 6px rgba(0,0,0,0.23);
    display: flex;
  }

  .emblema {
    margin-left: 15px;
    align-self: center;
  }

  .barra {
    margin-right: 15px;
    margin-left: auto;
  }
`;
