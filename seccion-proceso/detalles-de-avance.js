
export class DetallesDeAvance extends HTMLElement {
    constructor() {
        super();
        this.DOMRaíz = this.attachShadow({mode: 'open'})
        this.DOMRaíz.innerHTML += _plantilla;
        this.DOMRaíz.innerHTML += _estilos;
    }
}

let _plantilla = `
  <aside class="contenedor-principal">
    <h1>Inicio del Servicio Social</h1>
    <ul>
      <li>Asiste a la junta de inducción.</li>
      <li>Revisa detalladamente el reglamento del Servicio Social</li>
      <li>Verifica que cumplas los requisitos necesarios para realizar el servicio social</li>
      <li>Empieza el proceso de inscripción</li>
    </ul>
  </aside>`;

let _estilos = `
  <style>
    .contenedor-principal {
      width: 100%;
      height: 100%;
      background: rgb(77, 75, 75);
      box-shadow: -3.5px 0 8px rgba(0,0,0,0.19),
                  -2px 0 6px rgba(0,0,0,0.23);
    }
    h1 {
      margin:  0;
      padding: 6vmin;
      font-family: 'Source Sans Pro Black';
      color: #fff;
      font-size: 25pt;
    }
    ul{
      padding-left: 10vmin;
      color: white;
      font-family: 'Source Sans Pro Regular';
      font-size: 13.5pt;
      line-height: 2;
    }
    li {
      list-style: none;
      display: block;
      margin-top: 5px;
    }
    li:before {   
      content: "";  
      border-color: transparent rgb(0, 181, 226);  
      border-style: solid;
      border-width: 0.3em 0 0.3em 0.3em;
      display: block;
      height: 0;
      width: 0;
      left: -1em;
      top: 20pt;
      position: relative;
    }
  </style>`;