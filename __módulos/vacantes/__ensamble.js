import { ComponenteWeb } from "../_general/definiciones/componente-web.js";

export class MóduloDeVacantes extends ComponenteWeb{}

MóduloDeVacantes.__etiqueta = 'fcc.ssc.modulo-de-vacantes';

MóduloDeVacantes.prototype.__plantillaHTML = () => `
  <fcc.ssc.encabezado-principal></fcc.ssc.encabezado-principal>
  <p>hola mundo desde Módulo de vacantes</p>
`;

MóduloDeVacantes.prototype.__estilos = () => ``;