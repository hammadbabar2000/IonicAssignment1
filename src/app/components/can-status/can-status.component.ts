import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-can-status',
  templateUrl: './can-status.component.html',
  styleUrls: ['./can-status.component.scss'],
  standalone: false,
})
export class CanStatusComponent implements OnInit {

  data!: any;
  filteredData!: any[];

  constructor(private serv: DataService) {}

  ngOnInit() {
    this.serv.data$.subscribe(data => {
      this.data = data;
      this.filteredData = data.filter(item => item.pruid === 1 && item.date === "2022-02-19");

      if (this.filteredData.length > 0) {
        console.log(this.filteredData[0]);
      } else {
        console.log("No data found");
      }

    });
  }

  protected readonly Date = Date;
}
