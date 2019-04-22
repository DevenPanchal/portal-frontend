import { Component, OnInit } from '@angular/core';
import { BackendCommunicatorService } from '../backend-communicator.service'
import { Job } from '../Job.model'
import { ActivatedRoute } from "@angular/router";
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-singlejob',
  templateUrl: './singlejob.component.html',
  styleUrls: ['./singlejob.component.css']
})
export class SinglejobComponent implements OnInit {
  data: any;
  job: any;
  jobid: any;
  constructor(private serv: BackendCommunicatorService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params)
      this.jobid = + params['jobid']
    

    });

    this.serv.getTheJob(this.jobid).subscribe((data: Job) => {
      this.job = data;
      console.log('Got the required job ... ');
      console.log(this.job);
    });

  }

  ngOnInit() { }




}
