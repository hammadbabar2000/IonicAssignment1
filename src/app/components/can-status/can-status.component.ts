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
    this.serv.getCsvData().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
