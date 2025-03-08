import { Component,Inject, PLATFORM_ID, OnInit, OnDestroy  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SolutionsService } from './servicesFolder/solutions.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NavigationBarComponent,FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'labcore-website';
  solutionOpenStatus: boolean = false;  
  private statusSubscription: Subscription= new Subscription();  

  constructor(private SolutionsService:SolutionsService ){

  }

  ngOnInit(): void {
    
    this.statusSubscription = this.SolutionsService.getOpenStatus().subscribe(
      (status) => {
        this.solutionOpenStatus = status;  
          
      }
    );
  }

  ngOnDestroy(): void {
    
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }
  }
 

}
