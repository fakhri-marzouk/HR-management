import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full" },
  {path:"home",component:HomeComponent},
  {path:"jobs",component:JobsComponent},
  {path:"login",component:AuthentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
