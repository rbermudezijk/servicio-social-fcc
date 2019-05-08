import { __registrarComponentes } from "./_módulos/_general/definiciones/componente-web.js";
import { FiguraSVGEmblema } from "./_módulos/_general/interfaz-de-usuario/encabezado-principal/figura-svg-emblema.js";
import { FiguraSVGCertificado } from "./_módulos/inicio/figuras/figura-svg-certificado.js";
import { FiguraSVGCohete } from "./_módulos/inicio/figuras/figura-svg-cohete.js";
import { FiguraSVGEditar } from "./_módulos/inicio/figuras/figura-svg-editar.js";
import { FiguraSVGPersona } from "./_módulos/inicio/figuras/figura-svg-persona.js";
import { FiguraSVGCerebro } from "./_módulos/inicio/figuras/figura-svg-cerebro.js";
import { EmblemaFCC } from "./_módulos/_general/interfaz-de-usuario/encabezado-principal/emblema-fcc.js";
import { BarraDeNavegación } from "./_módulos/_general/interfaz-de-usuario/encabezado-principal/barra-de-navegación.js";
import { EncabezadoPrincipal } from "./_módulos/_general/interfaz-de-usuario/encabezado-principal/__ensamble.js";
import { DetallesDelProcedimiento } from "./_módulos/inicio/detalles-del-procedimiento.js";
import { ProcedimientoDeCertificación } from "./_módulos/inicio/procedimiento-de-certificación.js";
import { ProcesoDeCertificación } from "./_módulos/inicio/proceso-de-certificacion.js";
import { MóduloInicial } from "./_módulos/inicio/__ensamble.js";


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
]);