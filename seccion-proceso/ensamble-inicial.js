
export class EnsambleInicial extends HTMLElement {
    constructor() {
        super();
        this.DOMRaiz = this.attachShadow({ mode: 'open' });
        this.DOMRaiz.innerHTML += _estilos;
        this.DOMRaiz.innerHTML += _plantilla;
    }
}

let _plantilla = `
  <main class="contenedor-principal">
    <fcc.ssc.encabezado-principal class="encabezado">
    </fcc.ssc.encabezado-principal>
    <seguimiento-de-alumno class="contenido">
    </seguimiento-de-alumno>
  </main>`;

let _estilos = `
  <style>
    .contenedor-principal {
      /**
       * Tamaño y posicionamiento.
       */
      position: relative;
      width:  100vw;
      height: 100vh;
       
      /**
       * Estructura del contenido (rejilla).
       */
      display: grid;
      grid-template-areas:
        "encabezado"
        "contenido";
      grid-template-rows: 0.9fr 9.1fr;
      grid-template-columns: 1fr;
    }
    .encabezado {
      z-index: 2;
      grid-area: encabezado;
    }
    .contenido {
      z-index: 1;
      grid-area: contenido;
    }
  </style>`
