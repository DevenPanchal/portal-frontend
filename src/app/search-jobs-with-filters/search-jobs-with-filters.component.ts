import { Component, OnInit } from '@angular/core';
import{BackendCommunicatorService} from '../backend-communicator.service';
import {Job} from '../Job.model';
@Component({
  selector: 'app-search-jobs-with-filters',
  templateUrl: './search-jobs-with-filters.component.html',
  styleUrls: ['./search-jobs-with-filters.component.css']
})
export class SearchJobsWithFiltersComponent implements OnInit {
  loc:any;
  keyword:any;
  filteredJobs: any;
  constructor(private serv: BackendCommunicatorService){}

  ngOnInit() {
  }

  jobKeywordSearch(){

    this.serv.searchJobsByKeyword(this.keyword).subscribe((data:Job[]) => {
      this.filteredJobs=data;
      console.log("Filtered Jobs by Keyword are " + JSON.stringify(data));
    })
  }
  jobLocationSearch(){
  
    this.serv.searchJobsByLocation(this.loc).subscribe((data:Job[]) => {
      this.filteredJobs=data;
    console.log("Filtered Jobs by Location are " + JSON.stringify(data));
  })

  }


}