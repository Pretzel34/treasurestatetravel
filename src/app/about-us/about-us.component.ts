import { Component, OnInit } from '@angular/core';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  faCheck = faCheckDouble;
  constructor() { }

  ngOnInit() {
  }

}
