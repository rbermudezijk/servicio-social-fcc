import { ComponenteWeb } from '../__general/definiciones/componente-web.js';
/**
 * Autor:              Ricardo Bermúdez Bermúdez.
 * Correo electrónico: ricardob.sistemas@gmail.com.
 * Fecha de creación:  20 de febrero del 2019.
 * 
 * Este componente representa el flujo del proceso de desarrollo del Servicio
 * Social que debe cumplir un alumno de la FCC de la BUAP.
 */
export class ProcesoDeCertificación extends ComponenteWeb {

  /** 
   * Carga los eventos de click para mostrar u ocultar los detalles del
   * avance del alumno.
   */
  connectedCallback() {
    this.velo                = this.DOMRaiz.querySelector('.velo-de-fondo');
    this.detallesDeAvance    = this.DOMRaiz.querySelector('.contenido-lateral');
    this.porcentajesDeAvance = this.DOMRaiz
    .querySelectorAll('fcc\\.ssc\\.procedimiento-de-certificacion');

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

ProcesoDeCertificación.__etiqueta = 'fcc.ssc.proceso-de-certificacion';

ProcesoDeCertificación.prototype.__plantillaHTML = () => `
<section>
  <h1 class="titulo-seccion">Proceso de certificación</h1>
  <div class="flujo-de-proceso">
    <fcc.ssc.procedimiento-de-certificacion
      icono="<fcc.ssc.figura-svg-cohete></fcc.ssc.figura-svg-cohete>"
      título="Inicio">
    </fcc.ssc.procedimiento-de-certificacion>
    <fcc.ssc.procedimiento-de-certificacion
      icono="<fcc.ssc.figura-svg-editar></fcc.ssc.figura-svg-editar>"
      título="Inscripción">
    </fcc.ssc.procedimiento-de-certificacion>
    <fcc.ssc.procedimiento-de-certificacion
      icono="<fcc.ssc.figura-svg-cerebro></fcc.ssc.figura-svg-cerebro>"
      título="Desarrollo">
    </fcc.ssc.procedimiento-de-certificacion>
    <fcc.ssc.procedimiento-de-certificacion
      icono="<fcc.ssc.figura-svg-persona></fcc.ssc.figura-svg-persona>"
      título="Término">
    </fcc.ssc.procedimiento-de-certificacion>
    <fcc.ssc.procedimiento-de-certificacion
      icono="<fcc.ssc.figura-svg-certificado></fcc.ssc.figura-svg-certificado>"
      título="Certificación"
      mostrar-flecha="no">
    </fcc.ssc.procedimiento-de-certificacion>
  </div>
  <div class="velo-de-fondo"></div>
  <fcc.ssc.detalles-del-procedimiento class="contenido-lateral">
  </fcc.ssc.detalles-del-procedimiento>
</section>`;

ProcesoDeCertificación.prototype.__estilos = () => `
  /**
   * 1.- Contenedor principal.
   * 
   * [A] Variables de acople.
   * [B] Tamaño.
   * [C] Diseño del contenedor.
   * [D] Posicionamiento de los elementos internos (Flex).
   */
  section {
    /** [A] */
    --color-de-fondo: var(--color-ternario, #e2e1e0);

    /** [B] */
    width:  100%;
    height: 100%;
  
    /** [C] */
    overflow: hidden;
    background: var(--color-de-fondo);

    /** [D] */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
  }
  
  /**
   * 2.- Contenido principal.
   */
  .flujo-de-proceso{
    width: -moz-fit-content;
    width: fit-content;
    display: flex;
  }
  
  /**
   * 3.- Detalles de procedimiento (Contenido lateral).
   * 
   * [A] Tamaño y posicionamiento.
   * [B] Animación.
   */
  .contenido-lateral {
    /** [A] */
    position: absolute;
    top:    9vh;
    left:   100vw;
    width:  50vw;
    height: 100%;
    z-index: 8;
  
    /** [B] */
    will-change: transform;
    transition: transform 0.25s ease-out;
  }
  
  /**
   * 3.1 Transición para activar deslizamiento contenido lateral.
   */
  .contenido-lateral.activo {
    transform: translate(-50vw, 0);
  }
  
  /**
   * 4.- Velo de fondo.
   * 
   * [A] Posicionamiento y tamaño.
   * [B] Diseño del contenedor (Transparencia del velo).
   */
  .velo-de-fondo {
    /** [A] */
    position: absolute;
    left:    0;
    top:     0;
    width:  0vw;
    height: 0vh;
  
    /** [B] */
    opacity: 0;
    background-color: rgba(0,0,0,0.3);
  }
  
  /** 4.1.- Transición para activar velo. */
  .velo-de-fondo.activo {
    opacity: 0.3;
    width:  100vw;
    height: 100vh;
  }

  .titulo-seccion {
    position: absolute;
    user-select: none;
    top:   calc(68px + 30px);
    left:  70.5px;
    color: #737171;
    font-size:   39px;
    font-weight: 300;
    font-family: 'Source Sans Pro Regular';

    border-bottom-width: 1px;
    border-bottom-color: #bebba6;
    border-bottom-style: solid;
  }`;