import { EnsambleInicial }      from './seccion-proceso/ensamble-inicial.js';
import { SeguimientoDeAlumno }  from './seccion-proceso/seguimiento-de-alumno.js';
import { PorcentajeDeAvance }   from './seccion-proceso/porcentaje-de-avance.js';
import { DetallesDeAvance }     from './seccion-proceso/detalles-de-avance.js';
import { FiguraSVGCohete }      from './iconos/figura-svg-cohete.js';
import { FiguraSVGEditar }      from './iconos/figura-svg-editar.js';
import { FiguraSVGCerebro }     from './iconos/figura-svg-cerebro.js';
import { FiguraSVGCertificado } from './iconos/figura-svg-certificado.js';
import { FiguraSVGPersona }     from './iconos/figura-svg-persona.js';
import { FiguraSVGEmblema }     from './iconos/figura-svg-emblema.js';

import { Encabezado }           from './componentes/común/interfaz-de-usuario/encabezado/encabezado.js'
import { Emblema }              from './componentes/común/interfaz-de-usuario/encabezado/emblema.js';
import { BarraDeNavegación }    from './componentes/común/interfaz-de-usuario/encabezado/barra-de-navegación.js';

customElements.define('fcc.ssc.encabezado-principal', Encabezado);
customElements.define('fcc.ssc.emblema-fcc',          Emblema);
customElements.define('fcc.ssc.barra-de-navegacion',  BarraDeNavegación);

customElements.define('figura-svg-emblema',     FiguraSVGEmblema);
customElements.define('figura-svg-cerebro',     FiguraSVGCerebro);
customElements.define('figura-svg-persona',     FiguraSVGPersona);
customElements.define('figura-svg-certificado', FiguraSVGCertificado);
customElements.define('figura-svg-editar',      FiguraSVGEditar);
customElements.define('figura-svg-cohete',      FiguraSVGCohete);
customElements.define('porcentaje-de-avance',   PorcentajeDeAvance);

customElements.define('detalles-de-avance',     DetallesDeAvance);
customElements.define('ensamble-inicial',       EnsambleInicial);
customElements.define('seguimiento-de-alumno',  SeguimientoDeAlumno);