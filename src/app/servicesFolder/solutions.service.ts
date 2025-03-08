import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {


private apiUrl = 'assets/solutions.json' 
OpenStatus:boolean=false;
private OpenStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getSolutions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);  
  }

 

  
  opencloseSolution() {
    this.OpenStatus = !this.OpenStatus;
    this.OpenStatusSubject.next(this.OpenStatus); 
  }

  
  getOpenStatus(): Observable<boolean> {
    return this.OpenStatusSubject.asObservable();
  }


}
