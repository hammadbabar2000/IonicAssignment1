import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject<any[]>([]);
  private dataOnt = new BehaviorSubject<any[]>([]);
  data$ = this.data.asObservable();
  dataOnt$ = this.dataOnt.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<any[]>('/assets/data/csvjson.json').subscribe(data => {
      this.data.next(data);
    });
    this.http.get<any[]>('/assets/data/ontario.json').subscribe(dataOnt => {
      this.dataOnt.next(dataOnt);
    });
  }

}
