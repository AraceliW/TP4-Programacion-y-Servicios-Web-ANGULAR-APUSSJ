import { Component } from '@angular/core';

export interface Carta {
  id: number;
  imagen: string;
  volteada: boolean;
  emparejada: boolean;
}


@Component({
  selector: 'app-punto3',
  imports: [],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3{
  cartas: Carta[] = []
  cartasVolteadas: Carta[] = []
  verificada: boolean = false
  intentos: number = 0;
  jugable: boolean = false;


  iniciarJuego(){
    this.intentos = 5;
    this.jugable=false;
    const imagenes = [
      '🎭',
      '🎱',
      '🔮',
      '🎰',
      '🐶',
      '🐱',
      '🐭',
      '🐹',
      '🎭',
      '🎱',
      '🔮',
      '🎰',
      '🐶',
      '🐱',
      '🐭',
      '🐹',
    ];

    this.cartas = imagenes.map((imagen, i) => ({
      id: i,
      imagen,
      volteada: false,
      emparejada: false,
    }))
    .sort(() => Math.random() - 0.5); // Baraja las cartas
  }

  activarSeleccion(){
    this.jugable = true;
  }

  voltearCarta(card: Carta){
    if(!this.jugable || this.verificada || card.volteada || card.emparejada)
      return;
      card.volteada = true;
      this.cartasVolteadas.push(card);

      if(this.cartasVolteadas.length === 2){
        this.jugable=false;
        this.verificarPar();
      }
  }

  verificarPar():void{
      const [card1, card2] = this.cartasVolteadas;
  
      if(card1.imagen === card2.imagen){
        card1.emparejada = true;
        card2.emparejada = true;

        if (this.cartas.every(c => c.emparejada)) {
          this.mostrarFinDeJuego("¡Felicidades, has ganado!");
        }

      } else {
        this.intentos--;
  
        if(this.intentos === 0){
          this.mostrarFinDeJuego("Fin del juego, te quedaste sin intentos");
        }
      }
      setTimeout(() => {
        this.cartasVolteadas.forEach((card) => (card.volteada = false));
        this.cartasVolteadas = [];
        this.verificada = false;
      }, 1);
  }

  reiniciarJuego(){
    this.cartas = [];
    this.cartasVolteadas = [];
    this.verificada = false;
    this.intentos = 5
  }

  mostrarFinDeJuego(mensaje:string){
    alert(mensaje);
    this.reiniciarJuego();
  }
}