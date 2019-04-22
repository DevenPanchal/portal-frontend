import { Component, OnInit } from '@angular/core';
import { BackendCommunicatorService } from '../backend-communicator.service'
import { Job } from '../Job.model'
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrls: ['./alljobs.component.css']
})
export class AlljobsComponent implements OnInit {
  data: any;
  alljobs: any;

  constructor(private serv: BackendCommunicatorService) { }

  ngOnInit() {


    this.serv.getAllJobs().subscribe((data: Job[]) => {
     this.alljobs = data;
      console.log('All jobs received by the alljobs component ... ');
      console.log(this.alljobs);
    });


  }

}
