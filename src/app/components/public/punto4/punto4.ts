import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InscripcionService } from '../../../services/inscripcion.service';
import { Inscripcion } from '../../../models/inscripcion';

@Component({
  selector: 'app-punto4',
  imports: [CommonModule, FormsModule],
  templateUrl: './punto4.html',
  styleUrl: './punto4.css',
})

export class Punto4 {
  nuevaInscripcion: Inscripcion;
  precioCalculado: number | null;
  listaInscripciones: Array<Inscripcion>;

  totalRecaudado: number;
  totalEstudiantes: number;
  totalEgresados: number;
  totalParticulares: number;
  constructor(private inscripcionService: InscripcionService) {
    this.nuevaInscripcion = new Inscripcion();
    this.precioCalculado = null;
    this.listaInscripciones = new Array<Inscripcion>();

    this.totalRecaudado = 0;
    this.totalEstudiantes = 0;
    this.totalEgresados = 0;
    this.totalParticulares = 0;
    this.actualizarDatos();
  }

  calcularTotal() {
    if (this.nuevaInscripcion.precio > 0 && this.nuevaInscripcion.categoriaAlumno > 0) {
      let descuento = 0;
      if (this.nuevaInscripcion.categoriaAlumno == 1) {
        descuento = 0.35;
      } else if (this.nuevaInscripcion.categoriaAlumno == 2) {
        descuento = 0.50;
      }
      this.precioCalculado = this.nuevaInscripcion.precio - (this.nuevaInscripcion.precio * descuento);
      this.nuevaInscripcion.precioFinal = this.precioCalculado;
    } else {
      this.precioCalculado = null;
    }
  }


  registrar() {
    this.nuevaInscripcion.fechaInscripcion = new Date();

    if (this.nuevaInscripcion.id === 0) {
      this.inscripcionService.agregarInscripcion(this.nuevaInscripcion);
    } else {
      this.inscripcionService.modificarInscripcion(this.nuevaInscripcion);
    }
    this.nuevaInscripcion = new Inscripcion();
    this.precioCalculado = null;

    this.actualizarDatos();
  }

  seleccionarParaEdicion(insc: Inscripcion) {
    this.nuevaInscripcion = new Inscripcion();
    this.nuevaInscripcion.id = insc.id;
    this.nuevaInscripcion.dni = insc.dni;
    this.nuevaInscripcion.precio = insc.precio;
    this.nuevaInscripcion.categoriaAlumno = insc.categoriaAlumno;
    this.nuevaInscripcion.fechaInscripcion = insc.fechaInscripcion;
    this.nuevaInscripcion.email = insc.email;
    this.nuevaInscripcion.curso = insc.curso;
    this.nuevaInscripcion.precioFinal = insc.precioFinal;
    this.precioCalculado = this.nuevaInscripcion.precioFinal;
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta inscripción?')) {
      this.inscripcionService.eliminarInscripcion(id);
      this.actualizarDatos();
    }
  }

  actualizarDatos() {
    this.listaInscripciones = this.inscripcionService.getInscripciones();
    this.totalRecaudado = 0;
    this.totalEstudiantes = 0;
    this.totalEgresados = 0;
    this.totalParticulares = 0;

    for (let i = 0; i < this.listaInscripciones.length; i++) {
      let insc = this.listaInscripciones[i];
      this.totalRecaudado += insc.precioFinal;
      if (insc.categoriaAlumno == 1) {
        this.totalEstudiantes++;
      } else if (insc.categoriaAlumno == 2) {
        this.totalEgresados++;
      } else if (insc.categoriaAlumno == 3) {
        this.totalParticulares++;
      }
    }
  }
}
