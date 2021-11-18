import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { PhotoDashComponent } from "./PhotoViewer/photo-dash/photo-dash.component";

const routes: Routes = [{path: 'photodash', component: PhotoDashComponent},
                        { path: '',   redirectTo: '/photodash', pathMatch: 'full' }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
