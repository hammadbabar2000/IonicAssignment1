import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  notes: string = "";
  dates: { date: string }[] = [
    {
      date: "2022-02-11"
    },
    {
      date: "2022-02-12"
    },
    {
      date: "2022-02-13"
    },
    {
      date: "2022-02-14"
    },
    {
      date: "2022-02-15"
    },
    {
      date: "2022-02-16"
    },
    {
      date: "2022-02-17"
    },
    {
      date: "2022-02-18"
    }
  ];
  selectedDate: any;

  constructor(private router: Router) {}

  submit() {
    this.notes = (document.getElementById('notes') as HTMLInputElement).value;
  }

  goDetails () {
    this.router.navigate(['/Details','Route Param', this.notes])
      .then(nav => { console.log(nav); },
        err => { console.log(err); }); }
}
