import { Component } from '@angular/core';
import { SolutionsService } from '../../servicesFolder/solutions.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SolutionsDetailsComponent } from '../solutions-details/solutions-details.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule,HttpClientModule,SolutionsDetailsComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  solutions: any =[];  
  selectedCategories: any = {}; 
  selectedSolutionTitle: string = '';
  solutionOpen!:boolean;
  private statusSubscription: Subscription = new Subscription(); // To store the subscription and unsubscribe later


  constructor(private SolutionsService: SolutionsService) {}

  ngOnInit(): void {
    
    this.SolutionsService.getSolutions().subscribe(
      (data) => {
        this.solutions= data;
        console.log(this.solutions);
      },
      (error) => {
        console.error('Error loading solutions:', error);
      }
    );

    this.statusSubscription = this.SolutionsService.getOpenStatus().subscribe((status) => {
      this.solutionOpen = status; 
    });
  }


  ngOnDestroy(): void {
    
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }
  }

  onCategoryClick(category: any,solutionTitle: string): void {
    this.selectedCategories = category;  
    console.log('Selected category:', category);

    this.selectedSolutionTitle = solutionTitle;
   console.log('Selected solution title:', solutionTitle);
   
   this.SolutionsService.opencloseSolution();
   console.log(this.solutionOpen);
  }

}
