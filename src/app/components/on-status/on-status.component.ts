import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-on-status',
  templateUrl: './on-status.component.html',
  styleUrls: ['./on-status.component.scss'],
  standalone: false,
})
export class OnStatusComponent  implements OnInit {

  dataOnt!: any;
  filteredData!: any[];

  constructor(private serv: DataService) {}

  ngOnInit() {
    this.serv.dataOnt$.subscribe(dataOnt => {
      this.dataOnt = dataOnt;
      this.filteredData = dataOnt.filter(item => item["Reported Date"] === "02/19/2022");
      if (this.filteredData.length > 0) {
        console.log(this.filteredData[0]);
      } else {
        console.log("No data found");
      }
    });
  }
}


