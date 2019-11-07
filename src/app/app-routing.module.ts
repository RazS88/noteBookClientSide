import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [


  {path:'login',component:LoginComponent},
  {path:'content',component:ContentComponent},
  {path:'home' ,component:HomeComponent,outlet:'app-home'},
  
  // {path:'contact-details',component:ContactDetailsComponent,outlet:'app-home'},

  {path:'' ,component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
