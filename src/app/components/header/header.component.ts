import { Component, OnInit } from '@angular/core';
import { faCoffee, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCoffee = faCoffee;
  faBell = faBell;

  constructor() { }

  ngOnInit(): void {
  }

  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior: "smooth"});
  }

  toServices(){
    document.getElementById("services")?.scrollIntoView({behavior: "smooth"});
  }

  toDescripcion(){
    document.getElementById("descripcion")?.scrollIntoView({behavior: "smooth"});
  }

  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
  }

}
