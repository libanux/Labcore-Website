import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OpenCloseService {

  private _navState = new BehaviorSubject<boolean>(false);
  navState$ = this._navState.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  
  toggleNavState() {
    this._navState.next(!this._navState.value);
  }

  setNavState(state: boolean) {
    this._navState.next(state); 
  }

  
  private onResize() {
    const newWidth = window.innerWidth;

  
    // if (newWidth <= 900 && this._navState.value) {
    //   this._navState.next(false); 
    // }

    
    if (newWidth > 900 && this._navState.value) {
      this._navState.next(false); 
    }
  }

  
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }
}
