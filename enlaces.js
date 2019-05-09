import { MóduloInicial }    from "./__módulos/inicio/__ensamble.js";
import { MóduloDeVacantes } from "./__módulos/vacantes/__ensamble.js";
import { MóduloDeInformes } from "./__módulos/informes/__ensamble.js";
import { MóduloDeContacto } from "./__módulos/contacto/__ensamble.js";

export const Enlaces = [
    {ruta: '',         componente: MóduloInicial},
    {ruta: 'inicio',   componente: MóduloInicial},
    {ruta: 'informes', componente: MóduloDeInformes},
    {ruta: 'vacantes', componente: MóduloDeVacantes},
    {ruta: 'contacto', componente: MóduloDeContacto},
];
