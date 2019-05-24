import { AdministradorDeEnlaces } from "./__módulos/__general/definiciones/administrador-de-enlaces.js";
import { __registrarComponentes } from "./__módulos/__general/definiciones/componente-web.js";
import { FiguraSVGEmblema } from "./__módulos/__general/interfaz-de-usuario/encabezado-principal/figura-svg-emblema.js";
import { FiguraSVGCertificado } from "./__módulos/inicio/figuras/figura-svg-certificado.js";
import { FiguraSVGCohete } from "./__módulos/inicio/figuras/figura-svg-cohete.js";
import { FiguraSVGEditar } from "./__módulos/inicio/figuras/figura-svg-editar.js";
import { FiguraSVGPersona } from "./__módulos/inicio/figuras/figura-svg-persona.js";
import { FiguraSVGCerebro } from "./__módulos/inicio/figuras/figura-svg-cerebro.js";
import { EmblemaFCC } from "./__módulos/__general/interfaz-de-usuario/encabezado-principal/emblema-fcc.js";
import { BarraDeNavegación } from "./__módulos/__general/interfaz-de-usuario/encabezado-principal/barra-de-navegación.js";
import { EncabezadoPrincipal } from "./__módulos/__general/interfaz-de-usuario/encabezado-principal/__ensamble.js";
import { DetallesDelProcedimiento } from "./__módulos/inicio/detalles-del-procedimiento.js";
import { ProcedimientoDeCertificación } from "./__módulos/inicio/procedimiento-de-certificación.js";
import { ProcesoDeCertificación } from "./__módulos/inicio/proceso-de-certificacion.js";
import { MóduloInicial } from "./__módulos/inicio/__ensamble.js";
import { MóduloDeVacantes } from "./__módulos/vacantes/__ensamble.js";
import { MóduloDeContacto } from "./__módulos/contacto/__ensamble.js";
import { MóduloDeInformes } from "./__módulos/informes/__ensamble.js";
import { Enlaces } from "./enlaces.js";


AdministradorDeEnlaces.__registrarEnlaces(Enlaces);

__registrarComponentes([
    FiguraSVGEmblema,
    FiguraSVGCerebro,
    FiguraSVGCertificado,
    FiguraSVGCohete,
    FiguraSVGEditar,
    FiguraSVGPersona,
    EmblemaFCC,
    BarraDeNavegación,
    EncabezadoPrincipal,
    DetallesDelProcedimiento,
    ProcedimientoDeCertificación,
    ProcesoDeCertificación,
    MóduloInicial,
    MóduloDeInformes,
    MóduloDeVacantes,
    MóduloDeContacto,
    AdministradorDeEnlaces,
]);

