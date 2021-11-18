import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoDashComponent } from './PhotoViewer/photo-dash/photo-dash.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    PhotoDashComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
