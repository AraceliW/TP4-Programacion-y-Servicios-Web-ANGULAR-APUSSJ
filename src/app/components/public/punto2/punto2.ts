import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css'
})
export class Punto2 {
    producto = [
    { 
      nombre: 'Mario Kart™ World', 
      descripcion: 'Prepara tus llantas para un juego totalmente nuevo de la serie Mario Kart', 
      precio: 100000,
      img: 'assets/images/4-mariokart.jpg'
    },
    { 
      nombre: 'Adaptador APPLE de 30 Pins a Lightning', 
      descripcion: 'Este adaptador permite conectar dispositivos con un conector lightnins a muchos de tus accesorios de 30 pines.', 
      precio: 78300,
      img: 'assets/images/3-adaptador.jpg'
    },
    { 
      nombre: 'Sony PlayStation 5 - Consola Slim 1TB y lector de disco.', 
      descripcion: 'PS5®, los jugadores obtienen una potente tecnología de gaming en un diseño de consola compacto y elegante.', 
      precio: 1500000,
      img: 'assets/images/1-ps5.jpg'
    },
    
    {
      nombre: 'Auriculares HyperX Cloud Stinger Core Wireless - PS4/PS5', 
      descripcion: 'Los auriculares inalámbricos HyperX Cloud Stinger Core son ligeros, duraderos y aptos para jugar en sistemas PS4™ y PS5™.', 
      precio: 90400,
      img: 'assets/images/2-auriculares.jpg'
    }
  ];

  carrito: any[] = [];
  total: number = 0;
  compraFinalizada: boolean = false;

  agregarAlCarrito(producto: any) {
    // Verificar si el producto ya está en el carrito
    const productoExistente = this.carrito.find(item => item.nombre === producto.nombre);
    
    if (!productoExistente) {
      this.carrito.push({...producto, cantidad: 1});
      this.calcularTotal();
      this.compraFinalizada = false;
    }
  }

  calcularTotal() {
    this.total = this.carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  }

  getCantidadProductos() {
    return this.carrito.length;
  }

  finalizarCompra() {
    this.compraFinalizada = true;
    this.carrito = [];
    this.total = 0;
  }

  cerrarModal() {
    this.compraFinalizada = false;
  }
}
