
/**
 * Esta clase representa una abstracción de la declaración de un
 * componente web. Contiene las rutinas generales de inicialización
 * y carga de un componente web.
 */
export class ComponenteWeb extends HTMLElement {

    constructor() {
      super();

      this.DOMRaiz = this.attachShadow({mode: 'open'});
      this.__montajeDeInterfaz();
    }

    __montajeDeInterfaz() {
      console.log(this.__plantillaHTML)
      let parametrosDeMontaje = typeof(this.__parametrosDeMontaje)==='function'
        ?this.__parametrosDeMontaje()
        :{};

      this.DOMRaiz.innerHTML  = typeof(this.__estilos)==='function'
        ?`<style>${this.__estilos(parametrosDeMontaje)}</style>`
        :'';

      this.DOMRaiz.innerHTML += typeof(this.__plantillaHTML)==='function'
        ?this.__plantillaHTML(parametrosDeMontaje)
        :'';
    }

    __limpiarContenido() {
      this.DOMRaiz.innerHTML = '';
    }

    __parametrosDeMontaje() {}
}

export function __registrarComponentes(listaDeComponentesWeb) {
  listaDeComponentesWeb.map(componenteWeb =>
    console.log(componenteWeb) ||
    customElements.define(componenteWeb.__etiqueta, componenteWeb))
}