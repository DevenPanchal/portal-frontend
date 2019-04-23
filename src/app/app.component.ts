import { Component } from '@angular/core';
import{BackendCommunicatorService} from './backend-communicator.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobportalfrontend';
 

  constructor(private serv: BackendCommunicatorService){}

  onSubmit() {


  }

  

}

