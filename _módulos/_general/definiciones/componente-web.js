
/**
 * Esta clase representa una abstracción de la declaración de un
 * componente web. Contiene las rutinas generales de inicialización
 * y carga de un componente web.
 */
export class ComponenteWeb extends HTMLElement {

    constructor() {
      super();

      this.DOMRaiz = this.attachShadow({mode: 'open'});

      this.__montajeDeInterfaz(
        this.__estilos               || (()=>{}),
        this.__plantillaHTML         || (()=>{}),
        this.__parametrosDeMontaje() || {}
      );
    }

    __montajeDeInterfaz(estilos, plantillaHTML, parametrosDeMontaje) {  
      this.DOMRaiz.innerHTML  = `<style>${estilos(parametrosDeMontaje)}</style>`;
      this.DOMRaiz.innerHTML += plantillaHTML(parametrosDeMontaje);
    }

    __parametrosDeMontaje(){}
}

export function __registrarComponentes(listaDeComponentesWeb) {
  listaDeComponentesWeb.map(componenteWeb =>
    console.log(componenteWeb) ||
    customElements.define(componenteWeb.__etiqueta, componenteWeb))
}