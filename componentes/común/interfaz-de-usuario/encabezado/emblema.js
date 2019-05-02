import { ComponenteWeb } from "../../núcleo/componente-web.js";

export class Emblema extends ComponenteWeb {}

Emblema.prototype.__plantillaHTML = () => `
  <h1>
    <figura-svg-emblema tamaño="60">
    </figura-svg-emblema>
    <div></div>
    <a>Servicio Social</a>
  </h1>
`;

Emblema.prototype.__estilos = () => `
  h1 {
    --color-de-titulo:  var(--texto-de-encabezado--color, #fff);
    --color-de-divisor: var(--color-de-institucion, #fff);
    margin: 0;
    display: flex;
    align-items: center;
  }

  a {
         user-select: none;
    -moz-user-select: none;
    color: var(--color-de-titulo);
  }
  
  div {
    width:   5px;
    height: 55px;
    display: inline-block;
    margin: 0 15px 0 10px;
    border-radius: 2px;
    background: var(--color-de-divisor);
  }
`;