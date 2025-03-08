import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  contactForm= new FormGroup({
   
    senderName:new FormControl('',Validators.required), 
       
    senderEmail:new FormControl('',[Validators.required, Validators.email]),
    senderPhone:new FormControl('',Validators.required),
  
    senderMessage:new FormControl('',Validators.required)
    })

}
