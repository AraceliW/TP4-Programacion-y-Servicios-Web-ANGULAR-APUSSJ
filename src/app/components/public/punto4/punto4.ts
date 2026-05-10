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


/* 
Inyección de Dependencias del Servicio a través del constructor: Se inyectó el servicio declarándolo 
como un parámetro privado en el método constructor (constructor(private inscripcionService: InscripcionService)).
Unidad: "09-angular2-servicios de angular con array maestro-detalle.pdf" y "08-angular2-inyeccion de dependencia.pdf"
Tema: Servicios / Inyección de Dependencia.
Sección: "CONSUMIENDO EL SERVICIO ANGULAR DESDE COMPONENTE: mensaje.component.ts"
Basado en el ejemplo: Es una réplica del componente MensajeComponent enseñado en el material, el cual 
realiza exactamente la misma inyección en su constructor: constructor(private mensajeService:MensajeService)


Inicialización de propiedades y arreglos en el constructor: Se separó la declaración de las propiedades 
(ej. listaInscripciones: Array<Inscripcion>;) y se procedió a inicializarlas en el 
constructor (this.listaInscripciones = new Array<Inscripcion>();, this.nuevaInscripcion = new Inscripcion();, etc.).
Unidad: "09-angular2-servicios de angular con array maestro-detalle.pdf"
Tema: Servicios.
Sección: "CONSUMIENDO EL SERVICIO ANGULAR DESDE COMPONENTE: mensaje.component.ts"
Basado en el ejemplo: Se basa en el código del MensajeComponent, el cual inicializa su arreglo de 
forma idéntica dentro de su constructor: this.mensajes = new Array<Mensaje>()

Delegación del acceso y manipulación de datos al Servicio (Patrón Maestro-Detalle): En lugar de manipular arreglos 
directamente en el componente, se delegó la lectura, inserción y eliminación al servicio invocando sus métodos 
(ej. this.inscripcionService.getInscripciones(), this.inscripcionService.agregarInscripcion(...)).
Unidad: "09-angular2-servicios de angular con array maestro-detalle.pdf"
Tema: Servicios.
Sección: "Introducción" y "CONSUMIENDO EL SERVICIO ANGULAR DESDE COMPONENTE: mensaje.component.ts"
Basado en el ejemplo: Basado en los métodos mostrarHistoricos() y borrarMensaje() del MensajeComponent, 
los cuales consumen las operaciones del servicio con this.mensajeService.getMensajes()
y this.mensajeService.deleteMensaje(mensaje)

Limpieza del formulario instanciando un nuevo objeto del Modelo: Al finalizar el método registrar() o  
iniciar la edición en seleccionarParaEdicion(), se limpió o rompió la referencia del objeto 
instanciando uno nuevo en memoria con this.nuevaInscripcion = new Inscripcion();.
Unidad: "09-angular2-servicios de angular con array maestro-detalle.pdf" y 
"06-angular2-formularios validacion template.pdf". Tema: Servicios / Formularios.
Sección: "CONSUMIENDO SERVICIO ANGULAR DESDE COMPONENTE: mensaje-form.component.ts" y "TRABAJANDO CON EL COMPONENTE"
Basado en el ejemplo: Basado exactamente en el método enviarMensaje() de la clase MensajeFormComponent 
que ejecuta this.mensaje = new Mensaje(); tras hacer un envío, y en el método limpiar() de la teoría de formularios


Cálculo de variables en el controlador para evitar llamadas a métodos en la interpolación ({{ }}): Se calcularon los 
totales (ej. totalRecaudado, totalEstudiantes) iterando el arreglo con un bucle for en el método actualizarDatos() 
del controlador de TypeScript, guardando los resultados en propiedades simples para evitar llamar métodos 
iterativos directamente en la interpolación de la vista.
Unidad: "manual-de-angular.pdf"
Tema: Binding en Angular al detalle / Interpolación.
Sección: "Expresiones, entre las dobles llaves"
Basado en la teoría y advertencia del material: Se aplicó estrictamente la advertencia de la unidad que 
establece que un método en la interpolación "se volverá a ejecutar cada vez que el estado del componente cambie" 
y que "si pones en el método código que tarde en ejecutarse... la aplicación caerá en rendimiento y afectando 
negativamente a la experiencia de usuario"
*/