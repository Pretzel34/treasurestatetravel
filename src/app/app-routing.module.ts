import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'about-us',
  component: AboutUsComponent,
  data: { state: 'about-us' }
},
{ path: 'contact-us', component: ContactUsComponent, data: { state: 'contact-us' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
