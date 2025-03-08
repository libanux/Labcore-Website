import { Component } from '@angular/core';
import { HomesectionOneElementOneComponent } from '../homesection-one-element-one/homesection-one-element-one.component';
import { HomesectionOneElementTwoComponent } from '../homesection-one-element-two/homesection-one-element-two.component';

@Component({
  selector: 'app-home-section-one',
  standalone: true,
  imports: [HomesectionOneElementOneComponent,HomesectionOneElementTwoComponent],
  templateUrl: './home-section-one.component.html',
  styleUrl: './home-section-one.component.css'
})
export class HomeSectionOneComponent {

}
