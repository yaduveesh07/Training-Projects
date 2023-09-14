import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WFCserviceService {
  url = "https://localhost:7021/WeatherForecast"

  constructor(private http: HttpClient) { }

  weatherforcast() {
    return this.http.get(this.url);
  }
}
