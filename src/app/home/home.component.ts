import { Component, OnInit } from '@angular/core';
import { faFingerprint, faPaw, faAnchor, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faFingerprint = faFingerprint;
  faPaw = faPaw;
  faAnchor = faAnchor;
  faBook = faBook;
  images = ['assets/service-4', 'assets/service-5', 'assets/service-6'];

  constructor() { }

  ngOnInit() {
  }

  scrollToElement($element): void {

    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    // window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

}
