import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import { AppService } from "src/app/service/app.service";

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit{

  @Output() outputEvent = new EventEmitter<boolean>();

  restart: boolean = false;

  constructor(public app: AppService){}

  ngOnInit(): void {
  }

  close(){
    this.app.win = false;
    this.outputEvent.emit(this.restart)
  }
}