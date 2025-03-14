import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-can-status',
  templateUrl: './can-status.component.html',
  styleUrls: ['./can-status.component.scss'],
  standalone: false,
})
export class CanStatusComponent implements OnInit {

  data: any; // declare the data property here

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.asObserver.subscribe(data => {
      this.data = data;
      console.log('Data:', this.data);
    });
  }
}
