import {Injectable} from '@angular/core';
import { Observer, BehaviorSubject } from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonDataUrl = new BehaviorSubject<any>(null);
  public asObserver = this.jsonDataUrl.asObservable();

  constructor(private http: HttpClient) {
    this.http.get('src/assets/data/csvjson.json').subscribe(data => {
      this.jsonDataUrl.next(data);
    });
  }

  setJsonData(data: any) {
    this.jsonDataUrl.next(data);
  }


}
