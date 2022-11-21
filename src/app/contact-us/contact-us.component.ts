import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import '../../assets/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  encapsulation : ViewEncapsulation.None,
})
export class ContactUsComponent implements OnInit {

  detailsForm = new  FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    message: new FormControl()
  });
  view: boolean = false;
  breakpoint: number = 2;
  constructor() { }
  
  ngOnInit(): void {
    if ( window.innerWidth <= 768 ) {
      this.view = true;
      this.breakpoint = (window.innerWidth <= 768) ? 1 : 2;
    }
  }
  
  sendForm(){
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'janabellieraj@gmail.com',
      Password : '9B86C42380CBD04DCFED374E96416B06E9B4',
      To : 'janabellieraj@gmail.com',
      From : 'janabellieraj@gmail.com',
      Subject : 'FYI',
      Body : `
      <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.detailsForm.value.name} <br /> <b>Email: </b>${this.detailsForm.value.email}}<br /> <b>Subject: </b>${this.detailsForm.value.mobile}<br /> <b>Message:</b> <br /> ${this.detailsForm.value.message} <br><br> <b>~End of Message.~</b> `
      }).then( (message: any) => {alert(message); 
    });
   
  }
}
