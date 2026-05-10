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
