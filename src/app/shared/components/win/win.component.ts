import { Component, OnInit} from "@angular/core";
import { AppService } from "src/app/service/app.service";

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit{

  constructor(public app: AppService){}

  ngOnInit(): void {
  }

  close(){
    this.app.win = false;
  }
}