import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  
  actualCard: number;
  firstSelectedCard: number;
  secondSelectedCard: number;
  selectedCards: Array<number> = [];
  equalityCards: Array<any> = [];
  accurateAnswer:boolean = false;
  verificationInProgress:boolean = false;
  
  constructor(public app: AppService) {}
  
  ngOnInit(): void {
    this.app.getRandomId();
    this.app.loadRanking();
    this.restart();
  }

  async restart(){
    this.app.gameStart = false;
    this.app.minutes = -1;
    this.app.hour = 0;
    this.app.attemps = 0;
    this.app.speed = '0:00';
    this.app.time = 0;
    this.actualCard = NaN;
    this.firstSelectedCard = NaN;
    this.secondSelectedCard = NaN;
    for (let i = 0; i <= this.equalityCards.length; i++){
      document.getElementById(`card_${this.equalityCards[i]}`)?.classList.remove('equality');
    }
    this.equalityCards = [];
    await setTimeout(() => {
      this.app.getRandomId();
    },600)
  }

  async selectCard(i:any, card:any){
    if (!this.verificationInProgress) {
      for (let r = 0; r <= this.equalityCards.length; r++) {
        if (i === this.equalityCards[r]) {
          this.accurateAnswer = true;
          break;
        } else {
          this.accurateAnswer = false;
        }
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
            this.app.attemps++;
            if (this.selectedCards[0] === this.selectedCards[1]) {
              this.actualCard = NaN;
              this.equalityCards.push(this.firstSelectedCard, this.secondSelectedCard);
              this.selectedCards = [];
              this.verificationInProgress = true;
              await setTimeout(() => {
                document.getElementById(`card_${this.firstSelectedCard}`)?.classList.add('equality');
                document.getElementById(`card_${this.secondSelectedCard}`)?.classList.add('equality');
                this.equalityCards.length === 16 ? this.app.win = true : this.app.win = false;
              },800)
              await setTimeout(() => {
                this.firstSelectedCard = NaN;
                this.secondSelectedCard = NaN;
                this.verificationInProgress = false;
                if (this.app.win){
                  this.app.addRankingData();
                  this.app.gameStart = false;
                  setTimeout(() => {
                    this.app.win = false;
                    this.restart();
                  },10000)
                }
              },1000)
            } else {
              this.actualCard = NaN;
              this.selectedCards = [];
              this.verificationInProgress = true;
              await setTimeout(() => {
                this.firstSelectedCard = NaN;
                this.secondSelectedCard = NaN;
                this.verificationInProgress = false;
              },1000)
            }
          }
        }
      }
    }

    if (!this.app.gameStart) {
      this.app.gameStart = true;
      this.chronometer();
    }
  }

  chronometer(){
    const timer = setInterval(() => {
      if (this.app.gameStart) {
        this.app.minutes++;
        this.app.time++;
        if ( this.app.minutes === 60) {
          this.app.hour++;
          this.app.minutes = 0;
        }
        if (this.app.minutes < 10) {
          this.app.speed = `${this.app.hour}:0${this.app.minutes}`;
        } else {
          this.app.speed = `${this.app.hour}:${this.app.minutes}`;
        }
      } else {
        clearInterval(timer);
      }
    },1000)
  }
}
