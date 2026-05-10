import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
  private inscripciones: Inscripcion[];
  constructor() {
    this.inscripciones = new Array<Inscripcion>();
  }


  getInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  getIdDisponible(): number {
    let maximo = 0;
    for (let i = 0; i < this.inscripciones.length; i++) {
      if (this.inscripciones[i].id > maximo) {
        maximo = this.inscripciones[i].id;
      }
    }
    return maximo + 1;
  }

  agregarInscripcion(nuevaInscripcion: Inscripcion) {
    nuevaInscripcion.id = this.getIdDisponible();
    this.inscripciones.push(nuevaInscripcion);
  }

  modificarInscripcion(inscripcionModificada: Inscripcion) {
    for (let i = 0; i < this.inscripciones.length; i++) {
      if (this.inscripciones[i].id === inscripcionModificada.id) {
        this.inscripciones[i] = inscripcionModificada;
        break;
      }
    }
  }

  eliminarInscripcion(id: number) {
    for (let i = 0; i < this.inscripciones.length; i++) {
      if (this.inscripciones[i].id === id) {
        this.inscripciones.splice(i, 1);
        break;
      }
    }
  }
}

/* 
TEORIA:
Gestión de la fuente de datos en memoria (Declaración e Inicialización): Se declaró el arreglo inscripciones como 
propiedad y se inicializó explícitamente instanciando el arreglo dentro del método constructor() mediante 
this.inscripciones = new Array<Inscripcion>();
Unidad: "09-angular2-servicios de angular con array maestro-detalle.pdf". Tema: "Servicios". 
Sección: "CREACION DE SERVICIOS EN ANGULAR".
Basado en el ejemplo: Se basó exactamente en el código del servicio de ejemplo mensajeService, el cual 
inicializa su arreglo de la misma manera: this.mensajes = new Array<Mensaje>();


Lectura e inserción de datos (Métodos Get y Add): Se crearon los métodos getInscripciones() para retornar el 
arreglo completo, y agregarInscripcion(nuevaInscripcion: Inscripcion) para asignar el ID e insertar 
el objeto directamente en el arreglo usando el método nativo .push()
Unidad: "09-angular2-servicios de angular con array maestro-detalle.pdf".
Tema: "Servicios".
Sección: "CREACION DE SERVICIOS EN ANGULAR".
Basado en el ejemplo: Basado en los métodos del apunte getMensajes() (que retorna this.mensajes) y 
addMensaje(mensaje: Mensaje) (que utiliza this.mensajes.push(mensaje);)

Cálculo manual del ID único (getIdDisponible): Se implementó el método getIdDisponible() que recorre 
el arreglo iterando con un ciclo for clásico para encontrar el valor máximo de la propiedad 
id y retorna ese valor máximo sumándole 1.
Unidad: "09-angular2-servicios de angular con array maestro-detalle.pdf".
Tema: "Servicios".
Sección: "CREACION DE SERVICIOS EN ANGULAR".
Basado en el ejemplo: Es una réplica del código exacto del método getIdDisponible() enseñado en el 
ejemplo de mensajeService de la teoría.

Operaciones de actualización y eliminación por ID: Se desarrollaron los métodos modificarInscripcion() 
y eliminarInscripcion() utilizando un ciclo for para iterar el arreglo, localizar el elemento 
comparando su atributo id con el parámetro recibido, y posteriormente reemplazar el objeto o quitarlo usando splice()
Basado en el ejemplo: Se basó en las firmas de los métodos updateMensaje(mensaje: Mensaje) y deleteMensaje(mensaje: Mensaje) 
dejadas intencionalmente vacías 
*/