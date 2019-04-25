import { Component } from '@angular/core';
import{BackendCommunicatorService} from './backend-communicator.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobportalfrontend';
  static API_URL="http://localhost:8080";

  constructor(private serv: BackendCommunicatorService){}

  onSubmit() {


  }

  

}

