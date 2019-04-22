import { Component, OnInit } from '@angular/core';
import {Job} from '../Job.model';
import { BackendCommunicatorService} from '../backend-communicator.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  job: Job=new Job();

  constructor(private serv: BackendCommunicatorService) { }

  ngOnInit() {
  }
 
  onSubmit() {
    console.log('The posted job is ' + JSON.stringify(this.job));

    this.serv.postAJob(this.job).subscribe((data:any) => {
    
      console.log('Posted a new Job ... ');
      console.log(data);
      alert("You posted a new Job.  Job Details: " + JSON.stringify(this.job));
    });


}

}