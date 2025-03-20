import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false
})
export class DetailsPage implements OnInit {

  date!: any;
  dataOnt!: any;
  filteredData: any[] = [];
  notes: string = '';

  constructor(private activeroute: ActivatedRoute, private serv: DataService ) { }

  ngOnInit() {
    this.activeroute.params.subscribe(data=> {
      console.log('Route param - observable:', data);
    });

    this.activeroute.queryParams.subscribe(notes=> {
      console.log('Query param - observable:', notes);
    });

    this.date = this.activeroute.snapshot.paramMap.get('date');
    if (this.date) {
      const [year, month, day] = this.date.split('-');
      this.date = `${month}/${day}/${year}`;
    }
    console.log(this.date);

    this.serv.dataOnt$.subscribe(dataOnt => {
      this.dataOnt = dataOnt;
      this.filteredData = dataOnt.filter(item => item["Reported Date"] === this.date );
      if (this.filteredData.length > 0) {
        console.log(this.filteredData[0]);
      } else {
        console.log("No data found");
      }
    });

  }

}
