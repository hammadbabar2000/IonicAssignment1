import {Injectable} from '@angular/core';
import { map, Observable} from "rxjs";
import * as Papa from 'papaparse';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  public getCsvData(): Observable<any> {
    return this.http.get('assets/data/file.csv', { responseType: 'text' }).pipe(
      map(data => {
        let parsedData;
        Papa.parse(data, {
          header: true,
          complete: (result) => {
            parsedData = result.data;
          }
        });
        return parsedData;
      })
    );
  }
}
