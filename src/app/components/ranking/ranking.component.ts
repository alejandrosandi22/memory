import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.app.gameStart = false;
    this.app.hour = 0;
    this.app.minutes = 0;
    this.app.speed = '0:00';
    this.app.time = 0;
  }

}
