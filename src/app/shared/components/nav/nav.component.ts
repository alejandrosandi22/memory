import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  logged: boolean;

  constructor(public app: AppService) {}

  ngOnInit(): void {
    this.app.getCurrentUser();
  }

}
