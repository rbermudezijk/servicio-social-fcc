
export class FiguraSVG extends HTMLElement {
    constructor() {
        super();
        this.DOMRaiz = this.attachShadow({mode: 'open'});
        let color  = this.getAttribute('color')   || "#737171";
        let tamaño = this.getAttribute('tamaño') || "45px";
        this.DOMRaiz.innerHTML += this.plantilla(color, tamaño);
    }

}