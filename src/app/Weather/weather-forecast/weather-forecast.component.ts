import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Services/weather.service';
@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
  constructor(private weathersvc: WeatherService) {}

  ngOnInit(): void {
    this.GetWeatherData();
  }

  GetWeatherData() {
    this.weathersvc.GetWeatherReport().subscribe((res) => {
      console.log(res);
    });
  }
}
