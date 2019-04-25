
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
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log ('Homepage got the current user', this.currentUser);
  }
  ngOnInit() {
  }
  // logout from the app
  logOut() {
    console.log('Logout request received');
    this.authService.logOut()
      .subscribe(
        data => {
          console.log('The Auth service finished logout');
          this.router.navigate(['/login']);
        },
        error => {

        });
  }



}
