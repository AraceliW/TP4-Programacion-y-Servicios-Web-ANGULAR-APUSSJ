import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.html',
})
export class Punto1 {
  // Las URLs incluyen términos de búsqueda para que la imagen coincida
  eventos = [
    {
      nombre: 'Hackathon de Desarrollo Web',
      descripcion:
        'Competencia intensiva donde equipos de programadores desarrollan aplicaciones web innovadoras utilizando Angular, Node.js y bases de datos modernas. El objetivo es crear soluciones tecnológicas en tiempo récord.',
      img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    },

    {
      nombre: 'Conferencia de Ciberseguridad',
      descripcion:
        'Evento orientado a la seguridad informática donde especialistas exponen técnicas de protección de datos, hacking ético, análisis de vulnerabilidades y buenas prácticas para empresas tecnológicas.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    },

    {
      nombre: 'Workshop de Inteligencia Artificial',
      descripcion:
        'Capacitación práctica sobre modelos de inteligencia artificial, machine learning y automatización de procesos utilizando herramientas modernas aplicadas al desarrollo empresarial.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    },

    {
      nombre: 'Expo Tecnología Empresarial',
      descripcion:
        'Muestra tecnológica donde distintas empresas presentan soluciones de software, infraestructura cloud, desarrollo mobile y herramientas digitales para optimizar negocios.',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    },

    {
      nombre: 'Seminario de Desarrollo Backend',
      descripcion:
        'Charlas y prácticas sobre APIs REST, arquitectura de microservicios, bases de datos SQL/NoSQL y optimización de servidores utilizando tecnologías modernas.',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  indiceActual: number = 0;

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.eventos.length;
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.eventos.length) % this.eventos.length;
  }
}
