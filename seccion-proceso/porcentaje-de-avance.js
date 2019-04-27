/**
 * #Autor              -> Ricardo Bermúdez Bermúdez.
 * #Correo electrónico -> ricardob.sistemas@gmail.com
 * #Fecha de creación  -> 20 de febrero del 2019.
 * 
 * Este componente representa una determinada etapa del proceso de desarrollo
 * del Servicio Social.
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
      this.DOMRaiz.innerHTML += _plantilla(this.getAttribute('título'), this.getAttribute('mostrar-flecha'));
      
      this.arcoIzquierdo = this.DOMRaiz.querySelector('.-carga.-izquierdo');
      this.arcoDerecho   = this.DOMRaiz.querySelector('.-carga.-derecho');
      setTimeout(() => this.cargarPorcentaje(100), 150);
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
let _plantilla = (título='', flecha='') => `
  <div class="
    circunferencia
    ${!flecha?`-margen-d-155`:''}">

    <div class="arco-pi -izquierdo -mascara"></div>
    <div class="arco-pi -izquierdo -carga"></div>
    <div class="arco-pi -derecho -mascara"></div>
    <div class="arco-pi -derecho -carga"></div>
    <div class="contenido">
      <p>${título}</p>
    </div>

    ${!flecha?`<i class="flecha"></i>`:''}
  </div>`;

let _estilos = `
<style>
  .circunferencia {
    position:   relative;
    cursor:     pointer;
    width:      150px/*10.0vw*/;
    height:     150px/*10.0vw*/;
  }
  .-margen-d-155 {
    margin-right: 155px;
  }
      .arco-pi {
        width: 50%;
        height: 100%;
        position: absolute;
        box-sizing: border-box;
        border-width: 3px/*0.3vw*/;
        border-style: solid;
      }
          .-izquierdo {
            border-radius: 100% 0 0 100%/50%;
            border-right: none;
          }
          .-derecho {
            left: 50%;
            border-radius: 0 100% 100% 0/50%;
            border-left: none;
          }
          .-mascara {
            border-color: rgb(153, 153, 153);
          }
          .-carga {
            border-color: rgb(0, 181, 226);
          }
          
          .-carga.-izquierdo {
            transition: transform 0.5s ease-out;
            transform-origin: 100% 50%;
          }
          .-carga.-derecho {
            transition: transform 0.5s ease-in;
            transform-origin: 0% 50%;
          }
          .-mascara.-izquierdo { z-index: 4; }
          .-carga.-izquierdo   { z-index: 3; }
          .-mascara.-derecho   { z-index: 2; }
          .-carga.-derecho     { z-index: 1; }
      
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
      }
      /**
       * Contenido: Diseño y animación de las sombras.
       */
      .contenido{
        box-shadow: 0 10px 20px rgba(0,0,0,0.19),
                    0  6px  6px rgba(0,0,0,0.23);
        transition: box-shadow 0.2s ease-out;    
      }
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
        -moz-user-select: none;
        align-items: center;
        justify-content: center;
        font-family: 'Source Sans Pro Regular';
        font-size: 25px /*3.5vmin*/;
        color: rgb(115, 113, 113);
      }
  
      /**
       * Flecha: Posicionamiento.
       */
      .flecha {
        width: fit-content;
        position: absolute;
        left: 120%;
        top:  15%;
        text-shadow: 0 10px 20px rgba(0,0,0,0.19),
                     0  6px  6px rgba(0,0,0,0.23);
      }
      /**
       * Flecha: Fuente.
       */
      .flecha::after {
        content:   "\\2192";
        color: rgb(115, 113, 113);
        font-size: 100px/*6vw*/;
      }
</style>`;