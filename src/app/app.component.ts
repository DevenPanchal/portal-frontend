import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendCommunicatorService } from './backend-communicator.service';
import { User } from './User.model';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobportalfrontend';
  static API_URL = "http://localhost:8080";
  currentUser: User;

  constructor(public authService: AuthService, public router: Router,private serv: BackendCommunicatorService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('App Component got the current user', this.currentUser);
  }

  onInit() {
  }
  onSubmit() {
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

