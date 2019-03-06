/**
 * #Autor              -> Ricardo Bermúdez Bermúdez.
 * #Correo electrónico -> ricardob.sistemas@gmail.com
 * #Fecha de creación  -> 20 de febrero del 2019.
 * 
 * Este componente representa una determinada etapa del proceso de desarrollo
 * del Servicio Social. Cuando un alumno está registrádo en el sistema le
 * muestra el porcentaje de avance de ese alumno con respecto a la etapa del
 * proceso que se represente con este componente.
 */
export class PorcentajeDeAvance extends HTMLElement {  

    /**
     * Carga la plantilla HTML y los estilos necesarios.
     * 
     * Obtiene las referencias de los nodos utilizados para agregar la escucha
     * de eventos de la interfaz.
     */
    constructor() {
      super();
      
      this.DOMRaiz = this.attachShadow({mode: 'open'});
      this.DOMRaiz.innerHTML += _estilos;
      this.DOMRaiz.innerHTML += _plantilla(
        '18vmin', this.getAttribute('título')
      );
      
      this.arcoIzquierdo = this.DOMRaiz.querySelector('.carga.izquierdo');
      this.arcoDerecho   = this.DOMRaiz.querySelector('.carga.derecho');
      this.porcentaje    = this.DOMRaiz.querySelector('.contenido');
      this.título        = this.DOMRaiz.querySelector('.titulo');
    }

    /**
     * Agrega la escucha sobre de cambios en el atributo porcentaje.
     */
    static get observedAttributes() {
      return ['porcentaje']
    }
    
    /**
     * - a<texto> -> Nombre del atrbuto del componente que cambió.
     *               Como solo se observan cambios respecto al atributo
     *               porcentaje esta propiedad no se utiliza.
     * 
     * - b<texto> -> Valor anterior del atributo del componente.
     * 
     * - porcentajeDeAvance<texto> -> Porcentaje de avance del alumno sobre
     *                                de esta etapa del Servicio Social.
     * 
     * Actualiza el porcentaje de avance de un alumno respecto a una etapa del
     * proceso del servicio social (En el título y la barra de porcentaje).
     */
    attributeChangedCallback(a, b, porcentajeDeAvance) {
      this.porcentaje.innerHTML = `${porcentajeDeAvance}%`;
      setTimeout(() => this.cargarPorcentaje(porcentajeDeAvance), 150);
    }

    /**
     * - porcentaje<número-flotante> -> Porcentaje de avance con valores entre
     *                                  1 y 100.
     * 
     * Actualiza la barra de porcentaje de avance del alumno.
     */
    cargarPorcentaje(porcentaje) {
      let grados = porcentaje * 3.6;
      
      if (grados < 180) {
          this.arcoDerecho.style.transform=`rotate(0deg)`;
          setTimeout( () => {
              this.arcoDerecho.style.zIndex = 1;
              this.arcoIzquierdo.style.transform=`rotate(${grados}deg)`;
          }, 310);
      } else {
          this.arcoIzquierdo.style.transform=`rotate(180deg)`;
          setTimeout( () => {
              this.arcoDerecho.style.zIndex = 5;
              this.arcoDerecho.style.transform=`rotate(${grados - 180}deg)`
          }, 265);
      }
    }
}

/**
 * - radio<número-flotante> -> Radio de la circunferencia a dibujar en la
 *                             interfaz de usuario.
 * - título<texto>          -> Título del segmento del proceso del Servicio
 *                             Social representado por este componente.
 * 
 * -><texto> Plantilla HTML utilizada por el componente PorcentajeDeAvance.
 *   Para dibujar esta plantilla se utilizó parte del código e ideas
 *   desarrolladas por Hugo Giraudel en el siguiente enlace:
 *   
 *   https://css-tricks.com/css-pie-timer/
 */
let _plantilla = (radio, título='') => `
  <div class="circunferencia" style="width:${radio}; height:${radio}">
    <div class="arco-pi izquierdo mascara"></div>
    <div class="arco-pi izquierdo carga"></div>
    <div class="arco-pi derecho mascara"></div>
    <div class="arco-pi derecho carga"></div>
    <div class="contenido"></div>
    <div class="título">${título}</div>
  </div>`;

let _estilos = `
  <style>
  .circunferencia {
    position: relative;
    cursor: pointer;
  }
  
  .arco-pi {
    width: 50%;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    border-width: 4px;
    border-style: solid;
  }
  .izquierdo {
    border-radius: 100% 0 0 100%/50%;
    border-right: none;
  }
  .derecho {
    left: 50%;
    border-radius: 0 100% 100% 0/50%;
    border-left: none;
  }
  
  .mascara {
    border-color: rgb(153, 153, 153);
  }
  
  .carga {
    border-color: rgb(0, 181, 226);
  }
  .carga.izquierdo {
    transition: transform 0.5s ease-out;
    transform-origin: 100% 50%;
  }
  .carga.derecho {
    transition: transform 0.5s ease-in;
    transform-origin: 0% 50%;
  }
  
  .mascara.izquierdo { z-index: 4; }
  .carga.izquierdo   { z-index: 3; }
  .mascara.derecho   { z-index: 2; }
  .carga.derecho     { z-index: 1; }
  
  /**
   * Contenido: Tamaño y posicionamiento.
   */
  .contenido {
    width:  100%;
    height: 100%;
    position: absolute;
  }

  /**
   * Contenido: Diseño de fondo y sombras.
   */
  .contenido {
    border-radius: 3000px;
    background: #f1f1f1;
    box-sizing: border-box;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19),
                0  6px  6px rgba(0,0,0,0.23);
    transition: box-shadow 0.2s ease-out;
  }

  /**
   * Contenido:  Cambio de sombras al posicionar el cursor sobre el
   * contenido.
   */
  .circunferencia:hover .contenido {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25),
                0 10px 10px rgba(0,0,0,0.22);
  }

  /** 
   * Contenido: Diseño de fuente.
   */
  .contenido {
    display: flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    font-family: 'Source Sans Pro Regular';
    font-size: 21pt;
    color: rgb(115, 113, 113);
    transition: font-size 0.25s ease-out;
  }

  .circunferencia:hover .contenido {
    font-size: 22.5pt;
  }

  .título {
    width: 100%;
    position: absolute;
    user-select: none;
    bottom: -55px;
    transition: font-size 0.15s ease-out;
    font-family: 'Source Sans Pro Regular';
    font-weight: 500;
    font-size: 22pt;
    text-align: center;
    color: rgb(115, 113, 113);
    transition: border 0.25s ease-in-out;
  }

  .circunferencia:hover .título {
    border-bottom: rgb(115, 113, 113) 2.8pt solid;
  }

  </style>`;