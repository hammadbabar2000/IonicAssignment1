import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-can-status',
  templateUrl: './can-status.component.html',
  styleUrls: ['./can-status.component.scss'],
  standalone: false,
})
export class CanStatusComponent implements OnInit {

  myMsg!: any;

  constructor(private serv: DataService) {
  }

  ngOnInit() {
    this.serv.asObserver.subscribe(
      (message) => {
        this.myMsg = message
      });
  }

  newMessage() {
    this.serv.setMessage(this.myMsg);
    console.log(this.myMsg);
  }

}
