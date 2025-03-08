import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OpenCloseService } from '../servicesFolder/open-close.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';  




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  
})
export class HeaderComponent {

  isNavOpen: boolean = false;

  
  private navStateSub!: Subscription;

  constructor(private openCloseService: OpenCloseService) { }

  ngOnInit() {
    
    this.navStateSub = this.openCloseService.navState$.subscribe((state) => {
      this.isNavOpen = state;  
      console.log(this.isNavOpen);
    });

   
  }

  ngOnDestroy() {
    this.navStateSub?.unsubscribe();
  }


  
  toggleNav() {
    this.openCloseService.toggleNavState(); 
  }
  
  
}
