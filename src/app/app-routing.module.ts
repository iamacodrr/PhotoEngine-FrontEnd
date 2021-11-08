import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { WeatherForecastComponent } from "./Weather/weather-forecast/weather-forecast.component";

const routes: Routes = [{path: 'weatherforecast', component: WeatherForecastComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
