import { Routes } from '@angular/router';
import { HomeComponent } from './HomePage/home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartnersComponent } from './partners/partners.component';
import { SolutionsComponent } from './solutionsPage/solutions/solutions.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'aboutUs', component:AboutUsComponent},
    {path:'partners', component:PartnersComponent},
    {path:'solutions', component:SolutionsComponent},
    {path:'services', component:ServicesComponent},
    {path:'contactus', component:ContactUsComponent},
    {path:'**', component:NotFoundComponent},
    
];
