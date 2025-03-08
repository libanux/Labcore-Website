import { Component,HostListener, ElementRef, Renderer2} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { OpenCloseService } from '../servicesFolder/open-close.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  isNavOpen: boolean = false;
  
    
    private navStateSub!:Subscription;
  
    constructor(
      private openCloseService:OpenCloseService,
      private elRef: ElementRef,
    private renderer: Renderer2
    ) { }
  
    ngOnInit() {
      
      this.navStateSub = this.openCloseService.navState$.subscribe((state) => {
        this.isNavOpen = state;  
        console.log(this.isNavOpen);
      });
    }
  
    ngOnDestroy() {
     
      if (this.navStateSub) {
        this.navStateSub.unsubscribe();
      }
    }
  
    
    closeNav(){
      this.openCloseService.toggleNavState(); 
    }
    
    setNavClosed(){
      this.openCloseService.setNavState(false); // Close the nav by setting the state to false
    }
  

    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
      const clickedInsideNav = this.elRef.nativeElement.contains(event.target as Node);
      const clickedInsideIcon = document.querySelector('.barIcon-container')?.contains(event.target as Node);
      
  
      // Close the nav only if clicked outside the nav and the menu icon
      if (!clickedInsideNav && !clickedInsideIcon && this.isNavOpen) {
        this.closeNav();
      }
    }
    

}
