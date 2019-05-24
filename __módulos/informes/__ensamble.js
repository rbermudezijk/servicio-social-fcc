import { ComponenteWeb } from "../__general/definiciones/componente-web.js";

export class MóduloDeInformes extends ComponenteWeb{}

MóduloDeInformes.__etiqueta = 'fcc.ssc.modulo-de-informes';

MóduloDeInformes.prototype.__plantillaHTML = () => `
  <fcc.ssc.encabezado-principal></fcc.ssc.encabezado-principal>
  <p>hola mundo desde Módulo de informes</p>
`;

MóduloDeInformes.prototype.__estilos = () => ``;