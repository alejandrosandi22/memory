import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameStart: boolean;
  rotate: boolean;
  timer: string;
  hour: number;
  minutes: number;
  actualCard: number;
  selectedCards: Array<number>;
  firstSelectedCard: number;
  secondSelectedCard: number;
  equalityCards: Array<any>
  idCards: Array<any>;
  attemps:number;

  constructor(public app: AppService) {
    this.rotate = false,
    this.timer = '0:00',
    this.gameStart = false,
    this.minutes = 0,
    this.hour = 0,
    this.actualCard = NaN,
    this.selectedCards = [];
    this.firstSelectedCard = NaN;
    this.secondSelectedCard = NaN;
    this.equalityCards = [];
    this.idCards = [];
    this.attemps = 0;
  }

  ngOnInit(): void {
    this.app.getRandomId();
  }

  restart(){
    this.minutes = -1;
    this.hour = 0;
    this.actualCard = NaN;
    this.app.cards = [];
    this.app.getRandomId();
    this.firstSelectedCard = NaN;
    this.secondSelectedCard = NaN;
  }

  selectCard(i:any, card:any){

    if (this.actualCard != i) {
      this.actualCard = i;

      if (this.selectedCards.length === 0) {
        this.selectedCards.push(card.id);
        this.firstSelectedCard = i;
      } else {
        this.selectedCards.push(card.id);
        this.secondSelectedCard = i;
        this.attemps++;
        if (this.selectedCards[0] === this.selectedCards[1]) {
          console.log('igualdad')
          this.actualCard = NaN;
          this.selectedCards = [];
          
        } else {
          this.actualCard = NaN;
          this.selectedCards = [];
          setTimeout(() => {
            this.firstSelectedCard = NaN;
            this.secondSelectedCard = NaN;
          },1000)
        }
      }
    }

    console.log(this.selectedCards)
    console.log(this.actualCard)

    if (!this.gameStart) {
      this.gameStart = true;
      this.chronometer();
    }
  }

  chronometer(){
    setInterval(() => {
        if (this.gameStart) {
        this.minutes++;
        if ( this.minutes === 60) {
          this.hour++;
          this.minutes = 0;
        }
  
        if (this.minutes < 10) {
          this.timer = `${this.hour}:0${this.minutes}`;
        } else {
          this.timer = `${this.hour}:${this.minutes}`;
        }
      }
    },1000)
  }

}
