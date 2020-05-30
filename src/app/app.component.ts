import { Component, ViewChild, HostListener } from '@angular/core';
import { faMapMarkedAlt, faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'preston';
  faMapMarkedAlt = faMapMarkedAlt;
  faBars = faBars;
  faChevronRight = faChevronRight;
  activeClass = "homeComponent"
  showMobileView = false;
  openMobileView = true;

  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.setMobileClass();
  }

  scrollToElement($element): void {
    // console.log($element.id);
    this.activeClass = $element.id;

    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    // window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    // console.log("------ " + this.innerWidth);
    this.setMobileClass();
  }

  setMobileClass() {
    this.innerWidth <= 500 ? this.showMobileView = true : this.showMobileView = false;
  }
}
