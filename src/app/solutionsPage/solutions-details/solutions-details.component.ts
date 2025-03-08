import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SolutionsService } from '../../servicesFolder/solutions.service';

@Component({
  selector: 'app-solutions-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions-details.component.html',
  styleUrl: './solutions-details.component.css'
})
export class SolutionsDetailsComponent {

  @Input() categories: any; 
  @Input() solutionTitle: string = '';

  constructor(private SolutionsService: SolutionsService) {}

  ngOnInit(): void {
    console.log('Received categories:', this.categories);
    console.log('Received solution title:', this.solutionTitle);
  }

  cancelbox(){
    this.SolutionsService.opencloseSolution();
    
  }

}
