import { Component } from '@angular/core';
import { ServicesService } from '../servicesFolder/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services: any =[];  

  constructor(private ServicesService:ServicesService) {}
  
    ngOnInit(): void {
      
      this.ServicesService.getServices().subscribe(
        (data) => {
          this.services= data;
          console.log(this.services);
        },
        (error) => {
          console.error('Error loading solutions:', error);
        }
      );

}

}
