
import {BackendCommunicatorService} from '../backend-communicator.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {User} from "../User.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  currentUser: User;
  static API_URL="http://localhost:8080";

 
  constructor(public authService: AuthService, public router: Router,private serv: BackendCommunicatorService) {
  
  }
  ngOnInit() {
  }
}
