import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class partnersService {

  private partnersImages: string[] = [
    'images/doc.png',
    'images/doc.png',
    'images/doc.png',
    'images/doc.png',
    'images/doc.png',
    'images/doc.png',
    'images/doc.png',
    'images/doc.png',
    'images/doc.png',
    'images/doc.png',
    
  ];

  constructor() { }


  getPartnersImages(): string[] {
    return this.partnersImages;
  }

}
