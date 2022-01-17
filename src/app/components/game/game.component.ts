import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  
  gameStart: boolean = false;
  timer: string = '0:00';
  hour: number = 0;
  minutes: number = 0;
  actualCard: number;
  firstSelectedCard: number;
  secondSelectedCard: number;
  selectedCards: Array<number> = [];
  equalityCards: Array<any> = [];
  attemps:number = 0;
  accurateAnswer:boolean = false;
  verificationInProgress:boolean = false;
  win:boolean = false;
  
  constructor(public app: AppService) {}
  
  ngOnInit(): void {
    this.app.getRandomId();
  }

  restart(){
    this.gameStart = false;
    this.minutes = -1;
    this.hour = 0;
    this.timer = '0:00';
    this.attemps = 0;
    this.actualCard = NaN;
    this.firstSelectedCard = NaN;
    this.secondSelectedCard = NaN;
    for (let i = 0; i <= this.equalityCards.length; i++){
      document.getElementById(`card_${this.equalityCards[i]}`)?.classList.remove('equality');
    }
    this.equalityCards = [];
    this.app.getRandomId();
  }

  selectCard(i:any, card:any){
    if (!this.verificationInProgress) {
      for (let r = 0; r <= this.equalityCards.length; r++) {
        i === this.equalityCards[r] ? this.accurateAnswer = true : this.accurateAnswer = false;
      }
      if (!this.accurateAnswer) {
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
              this.actualCard = NaN;
              this.equalityCards.push(this.firstSelectedCard, this.secondSelectedCard);
              this.selectedCards = [];
              document.getElementById(`card_${this.firstSelectedCard}`)?.classList.add('equality');
              document.getElementById(`card_${this.secondSelectedCard}`)?.classList.add('equality');
              this.verificationInProgress = true;
              this.equalityCards.length === 18 ? this.win = true : this.win = false;
              setTimeout(() => {
                this.firstSelectedCard = NaN;
                this.secondSelectedCard = NaN;
                this.verificationInProgress = false;
                if (this.win) this.restart();
              },1000)
            } else {
              this.actualCard = NaN;
              this.selectedCards = [];
              this.verificationInProgress = true;
              setTimeout(() => {
                this.firstSelectedCard = NaN;
                this.secondSelectedCard = NaN;
                this.verificationInProgress = false;
              },1000)
            }
          }
        }
      }
    }


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
