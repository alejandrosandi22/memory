import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'memory';
  constructor(private app: AppService){}
  ngOnInit(): void {
      this.app.loadRanking();
  }
}
