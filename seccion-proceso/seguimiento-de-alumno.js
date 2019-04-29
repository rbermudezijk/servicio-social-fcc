/**
 * #Autor              <- Ricardo Bermúdez Bermúdez.
 * #Correo electrónico <- ricardob.sistemas@gmail.com.
 * #Fecha de creación  <- 20 de febrero del 2018.
 * 
 * Este componente representa el flujo del proceso de desarrollo del servicio
 * social que debe cumplir un alumno de la FCC de la BUAP. Además de que,
 * cuando el alumno se registra en la plataforma, se le muestra el seguimiento
 * que se da a su proceso de conclusión de su Servicio Social.
 */
export class SeguimientoDeAlumno extends HTMLElement {
    
  /**
   * Carga la plantilla HTML y los estilos necesarios.
   * 
   * Obtiene las referencias de los nodos utilizados para agregar la escucha
   * de eventos de la interfaz.
   */
  constructor() {
    super();

    this.DOMRaíz = this.attachShadow({mode: 'open'});
    this.DOMRaíz.innerHTML += _estilos;
    this.DOMRaíz.innerHTML += _plantilla;
    
    this.velo                = this.DOMRaíz.querySelector('.velo-de-fondo');
    this.detallesDeAvance    = this.DOMRaíz.querySelector('.contenido-lateral');
    this.porcentajesDeAvance = this.DOMRaíz.querySelectorAll('porcentaje-de-avance');
  }
    
  /** 
   * Carga los eventos de click para mostrar u ocultar los detalles del
   * avance del alumno.
   */
  connectedCallback() {
    this.velo.onclick = ()=> this.ocultarDetallesDeAvance();
    this.porcentajesDeAvance.forEach(
      arco => arco.onclick = () => this.mostrarDetallesDeAvance()
    );
  }

  /**
   * Muestra el velo de fondo para opacar el contenido principal de la
   * aplicación y resaltar el contenido lateral.
   */
  mostrarDetallesDeAvance() {
    this.velo.classList.add('activo');
    this.detallesDeAvance.classList.add('activo');
  }

  /**
   * Oculta el velo de fondo y el contenido lateral.
   */
  ocultarDetallesDeAvance() {
    this.velo.classList.remove('activo');
    this.detallesDeAvance.classList.remove('activo');
  }
}

/**
 * _Dependencias -> <porcentaje-de-avance>, <detalles-de-avance>.
 * 
 * Plantilla HTML para el componente <seguimiento-de-alumno>.
 */
let _plantilla = `
  <section class="contenedor-principal">
    <div class="flujo-de-procedimiento">
      <porcentaje-de-avance
        icono="<figura-svg-cohete></figura-svg-cohete>"
        título="Comienzo">
      </porcentaje-de-avance>
      <porcentaje-de-avance
        título="Inscripción"
        icono="<figura-svg-editar></figura-svg-editar>">
      </porcentaje-de-avance>
      <porcentaje-de-avance
        icono="<figura-svg-cerebro></figura-svg-cerebro>"
        título="Desarrollo">
      </porcentaje-de-avance>
      <porcentaje-de-avance
        icono="<figura-svg-persona></figura-svg-persona>"
        título="Término">
      </porcentaje-de-avance>
      <porcentaje-de-avance
        icono="<figura-svg-certificado></figura-svg-certificado>"
        título="Certificación"
        mostrar-flecha="no">
      </porcentaje-de-avance>
    </div>
    <div class="velo-de-fondo"></div>
    <detalles-de-avance class="contenido-lateral">
    </detalles-de-avance>
  </section>`;

let _estilos = `<style>
  /***********************************\
   *   1 - CONTENIDO PRINCIPAL       *
  \***********************************/
  .contenedor-principal {
    /**
     * 1.1 Constantes.
     */
    --color-de-fondo: var(--color-ternario, #e2e1e0);
    width:  100vw;
    /**
     * 1.2 Tamaño.
     
    
    */
   height: 100%;
  
    /**
     * 1.3 Diseño.
     */
    overflow: hidden;
    background: var(--color-de-fondo);

    /**
     * 1.4 Estructura interna.
     */
    display: flex;
    
    align-items: center;
   overflow-x: scroll;
  }
  
  .flujo-de-procedimiento{
    width: -moz-fit-content;
    width: fit-content;
    display: flex;
    padding: 0 70px;
  }
  
  /***********************************\
   *   2 - CONTENIDO LATERAL         *
  \***********************************/
  .contenido-lateral {
    /**
     * 2.1 Tamaño y posicionamiento.
     */
    position: absolute;
    top:    10vh;
    left:   100vw;
    width:  50vw;
    height: 100%;
    z-index: 8;
  
    /**
     * 2.2 Animación.
     */
    will-change: transform;
    transition: transform 0.25s ease-out;
  }
  
  /**
   * 3.2 Transición para activar deslizamiento
   *     contenido lateral.
   */
  .contenido-lateral.activo {
    transform: translate(-50vw, 0);
  }
  
  
  /***********************************\
   *   3 - VELO DE FONDO             *
  \***********************************/
  .velo-de-fondo {
    /**
     * 3.1 Posicionamiento y tamaño.
     */
    position: absolute;
    left:    0;
    top:     0;
    width:  0vw;
    height: 0vh;
  
    /**
     * 3.2 Diseño.
     */
    opacity: 0;
    background-color: rgba(0,0,0,0.3);
  }
  
  /**
   * 3.2 Transición para activar velo.
   */
  .velo-de-fondo.activo {
    opacity: 0.3;
    width:  100vw;
    height: 100vh;
  }
  </style>`;