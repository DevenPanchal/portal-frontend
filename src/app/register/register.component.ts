import { Component, OnInit, Input } from '@angular/core';
import {User} from '../User.model';
import{BackendCommunicatorService} from '../backend-communicator.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user: User=new User();
  constructor(private serv: BackendCommunicatorService) { }

  ngOnInit() {
  }
 
  onSubmit() {
    console.log('The entered user is ' + JSON.stringify(this.user));

    this.serv.registerUser(this.user).subscribe((data:any) => {
    
      console.log('Registered the user ... ');
      console.log(data);
      alert("You have been registered.  Your Details: " + JSON.stringify(this.user));
    });

  

  


  }
}
