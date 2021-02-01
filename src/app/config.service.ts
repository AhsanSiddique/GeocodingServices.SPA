// config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5000/weatherforecast';
  getWeatherForecast(searchTerm : string) {
    console.log(searchTerm);
    return this
            .http
            .get(`${this.url}/${searchTerm}`);
  }
}