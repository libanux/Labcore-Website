import { Component } from '@angular/core';
import { partnersService } from '../servicesFolder/partners.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {

  partnersImages: string[] = []; 

  
  constructor(private partnersService:partnersService) {}

  
  ngOnInit(): void {
    this.partnersImages = this.partnersService.getPartnersImages();
  }

}
