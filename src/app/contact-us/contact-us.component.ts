import { Component, OnInit } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import { faMapMarkedAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  message: any;
  eMail: any;
  fullName: any;
  subject: any;
  faMapMarkedAlt = faMapMarkedAlt;
  faEnvelope = faEnvelope;
  faPhone = faPhone;



  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  ngOnInit() {
  }

  sendMessage() {
    this.validateBtnState = ClrLoadingState.LOADING;
    //Validating Logic
    this.validateBtnState = ClrLoadingState.SUCCESS;
  }
}
