import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  logged: boolean;
  cards: Array<object>

  constructor() {
    this.logged = false;
    this.cards = [
      {card_id: 1, content: '<i class="far fa-circle"></i>', find: false}
    ]
  }

  ngOnInit(): void {
    console.log(this.cards)
  }

}
