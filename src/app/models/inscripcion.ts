export class Inscripcion {
    id: number;
    dni: string;
    precio: number;
    categoriaAlumno: number;
    fechaInscripcion: Date;
    email: string;
    curso: string;
    precioFinal: number;

    constructor() {
        this.id = 0;
        this.dni = '';
        this.precio = 0;
        this.categoriaAlumno = 0;
        this.fechaInscripcion = new Date();
        this.email = '';
        this.curso = '';
        this.precioFinal = 0;
    }

    /* 
    TEORIA:
    Creación y exportación de la clase: Definición de la clase como un módulo exportable
    realizado según la unidad "04-angular2-typescript.pdf", tema "Typescript", sección 
    "Clases, propiedades y constructor"
    También se aplica lo visto en la unidad "09-angular2-servicios de angular con array maestro-detalle.pdf", 
    tema "Servicios", sección "Identificación de la fuente de Dato"

   Tipado estático de propiedades: Asignación explicita de los tipos de datos a las variables
   (precio: number, dni: string) realizado según la unidad "04-angular2-typescript.pdf", 
   tema "Tipos de Datos", secciones "Strings" y "Number"

   Estructuración del modelo con un id único y una variable Date: Inclusión de la propiedad id: number; 
   (necesaria para el CRUD) y fechaInscripcion: Date; realizado según la unidad "09-angular2-servicios de angular 
   con array maestro-detalle.pdf", tema "Servicios", sección "Identificación de la fuente de Dato", basándose en 
   la estructura exacta de la clase ejemplo Mensaje

   Inicialización de propiedades mediante el constructor() y la palabra clave this: Inicialización de los valores de la clase 
   (this.id = 0;, this.dni = '';, etc.) dentro de la función constructora, realizado según la unidad 
   "04-angular2-typescript.pdf", tema "Typescript", sección "Clases, propiedades y constructor"
   y reflejado de la misma manera en el ejemplo de la clase User y la clase Mensaje de la unidad "09-angular2-servicios de
   angular con array maestro-detalle.pdf", sección "Identificación de la fuente de Dato"
*/
}