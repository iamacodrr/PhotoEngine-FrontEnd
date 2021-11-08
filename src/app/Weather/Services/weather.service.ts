import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  GetWeatherReport() {
    let httpuri = 'http://20.79.213.155/weatherforecast';
    return this.http.get(httpuri).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
