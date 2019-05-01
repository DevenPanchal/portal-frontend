import { Component, OnInit } from '@angular/core';
import { BackendCommunicatorService } from '../backend-communicator.service'
import { Job } from '../Job.model'
import { ActivatedRoute } from "@angular/router";
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { User } from '../User.model';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Component({
  selector: 'app-singlejob',
  templateUrl: './singlejob.component.html',
  styleUrls: ['./singlejob.component.css']
})
export class SinglejobComponent implements OnInit {
  data: any;
  job: any;
  jobid: any;
  currentUser:User;
  uri = 'http://localhost:8080';  
  constructor(private serv: BackendCommunicatorService, private route: ActivatedRoute,private http:HttpClient) {
    this.route.params.subscribe(params => {
      console.log(params)
      this.jobid = + params['jobid']
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    });

    this.serv.getTheJob(this.jobid).subscribe((data: Job) => {
      this.job = data;
      console.log('Got the required job ... ');
      console.log(this.job);
    });

  }

  ngOnInit() { }


apply()
{ 

 // return this.http.put(`${this.uri}/api/jobs`,this.job.users.push(this.currentUser));
}

}
