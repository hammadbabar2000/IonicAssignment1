import {Injectable} from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any;

  readJsonData(){
    fetch('src/assets/data/csvjson.json').then(res => res.json()).then(json => {
      this.data = json;

      console.log(json);
    });
  }

}
