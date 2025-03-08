import { Component } from '@angular/core';
import { HomeSectionOneComponent } from '../HomeSectionOne/home-section-one/home-section-one.component';
import { HomeSectionTwoComponent } from '../HomeSectionTwo/home-section-two/home-section-two.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSectionOneComponent,HomeSectionTwoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
