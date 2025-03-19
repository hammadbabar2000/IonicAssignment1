import {Injectable} from '@angular/core';
import { BehaviorSubject } from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject<any[]>([]);
  data$ = this.data.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<any[]>('/assets/data/csvjson.json').subscribe(data => {
      this.data.next(data);
    });
  }

}
