import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService{

  allCards: Array<any>;
  randomId: Array<number>;
  cards: Array<any>;

  constructor() {
    this.randomId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    this.allCards = [
      {id: 1, shape: 'fas fa-star'},
      {id: 2, shape: 'far fa-circle'},
      {id: 3, shape: 'fal fa-asterisk'},
      {id: 4, shape: 'far fa-acorn'},
      {id: 5, shape: 'fal fa-triangle'},
      {id: 6, shape: 'fal fa-square'},
      {id: 7, shape: 'fal fa-carrot'},
      {id: 8, shape: 'fas fa-apple-alt'},
      {id: 9, shape: 'fal fa-book-alt'},
      {id: 1, shape: 'fas fa-star'},
      {id: 2, shape: 'far fa-circle'},
      {id: 3, shape: 'fal fa-asterisk'},
      {id: 4, shape: 'far fa-acorn'},
      {id: 5, shape: 'fal fa-triangle'},
      {id: 6, shape: 'fal fa-square'},
      {id: 7, shape: 'fal fa-carrot'},
      {id: 8, shape: 'fas fa-apple-alt'},
      {id: 9, shape: 'fal fa-book-alt'},
    ]
    this.cards = [];
  }

  getRandomId(){
    let i = this.randomId.length;
    let j, k;
    for (i; i; i--){
      j = Math.floor(Math.random() * i);
      k = this.randomId[i - 1];
      this.randomId[i - 1] = this.randomId[j];
      this.randomId[j] = k;
    }
    this.pushCards();
  }

  pushCards(){
    for(let i = 0; i < 18; i++){
      this.cards.push(this.allCards[this.randomId[i]])
    }
  }
}
