import { Component, OnInit } from '@angular/core';
import {
  faMapMarkedAlt, faEnvelope, faPhone, faChess, faChessRook, faChessKing, faHospital, faWheelchair, faPeopleArrows
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  faMapMarkedAlt = faMapMarkedAlt;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faChess = faChess;
  faChessRook = faChessRook;
  faChessKing = faChessKing;
  faHospital = faHospital;
  faWheelchair = faWheelchair;
  faPeopleArrows = faPeopleArrows;

  constructor() { }

  ngOnInit(): void {
  }

}
