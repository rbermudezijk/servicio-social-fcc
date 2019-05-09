import { ComponenteWeb } from "../_general/definiciones/componente-web.js";

export class MóduloDeContacto extends ComponenteWeb{}

MóduloDeContacto.__etiqueta = 'fcc.ssc.modulo-de-contacto';

MóduloDeContacto.prototype.__plantillaHTML = () => `
  <fcc.ssc.encabezado-principal></fcc.ssc.encabezado-principal>
  <p>hola mundo desde Módulo de contacto</p>
`;

MóduloDeContacto.prototype.__estilos = () => ``;