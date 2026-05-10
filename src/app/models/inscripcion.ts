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
}
