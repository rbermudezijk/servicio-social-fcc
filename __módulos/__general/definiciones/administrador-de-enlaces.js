import { ComponenteWeb } from "./componente-web.js";

let __enlaces = [];

export class AdministradorDeEnlaces extends ComponenteWeb {

    obtenerRuta(hash) {
        let [ruta='', parametros=''] = hash.replace('#', '').split(';')
        return ruta;
    }

    cargarComponente(hash) {
      let ruta = this.obtenerRuta(hash)
      let enlaceACargar = __enlaces.find(enlace => enlace.ruta === ruta);

      if ( typeof(enlaceACargar)==='undefined' ) {
          console.log('Error: Componente no existe');
      } else {
        this.__limpiarContenido();

        let componenteACargar = enlaceACargar.componente;
        
        this.__plantillaHTML = () => `
          <${componenteACargar.__etiqueta}>
          </${componenteACargar.__etiqueta}>
        `;

        this.__montajeDeInterfaz();
      }
    }

    connectedCallback() {
        window.addEventListener('hashchange', () => this.cargarComponente(location.hash));
        this.cargarComponente(location.hash)
    }

}

AdministradorDeEnlaces.__etiqueta  = 'administrador-de-enlaces';

AdministradorDeEnlaces.__registrarEnlaces = enlaces => __enlaces=enlaces;
