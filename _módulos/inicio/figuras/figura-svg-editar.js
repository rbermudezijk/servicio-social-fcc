import { FiguraSVG } from '../../_general/definiciones/figura-svg.js';

export class FiguraSVGEditar extends FiguraSVG {}

FiguraSVGEditar.__etiqueta = 'fcc.ssc.figura-svg-editar';

FiguraSVGEditar.prototype.__plantilla = (color, tamaño) => `
  <svg style="width:${tamaño};height:${tamaño}" viewBox="0 0 24 24">
    <path fill="${color}" d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10V20M8,18H12.1L13,17.1V16H8V18M20.2,13C20.3,13 20.5,13.1 20.6,13.2L21.9,14.5C22.1,14.7 22.1,15.1 21.9,15.3L20.9,16.3L18.8,14.2L19.8,13.2C19.9,13.1 20,13 20.2,13M20.2,16.9L14.1,23H12V20.9L18.1,14.8L20.2,16.9Z" />
  </svg>`;