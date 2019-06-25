import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
   'https://api.apixu.com/v1/current.json?key=3ccd8cb6c6004c79b7e180231192306&q=' + location

    );
  }
}
