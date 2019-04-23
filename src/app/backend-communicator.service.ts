import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { User } from './User.model';
import { Job } from './Job.model';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicatorService {

  uri = 'http://localhost:8080';  // url of the backend

  /* headerDict:any = {
     'Content-Type': 'application/json',
     'Accept': '*',
     //'Access-Control-Allow-Headers': 'Content-Type',
   }
 
  
   
   requestOptions = {                                                                                                                                                                                 
     headers: new Headers(this.headerDict), 
   };
   */

  constructor(private http: HttpClient) {

  }

  /* Gets http://localhost:8080/api/jobs */
  getAllJobs() {
    return this.http.get(`${this.uri}/api/jobs/`);
  }

  /* Gets http://localhost:8080/api/job/{id}*/
  getTheJob(id: any) {
    return this.http.get(`${this.uri}/api/job/${id}`);
  }

  /*Posts to http://localhost:8080/api/users */
  registerUser(user: User) {
    return this.http.post(`${this.uri}/api/users`, user);
  }

  /*Posts to http://localhost:8080/api/jobs */
  postAJob(job: Job) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*'
      })
    };

    return this.http.post(`${this.uri}/api/jobs`, job, httpOptions);
  }



  /* Gets http://localhost:8080/api/filter-jobs-by-searchtext?searchtext=the */
  searchJobsByKeyword(keyword: string) {
    const params = new HttpParams()
      .set('searchtext', keyword);

    return this.http.get(`${this.uri}/api/filter-jobs-by-searchtext`, { params });
  }
  /*Gets http://localhost:8080/api/filter-jobs-by-location?location=boston */
  searchJobsByLocation(loc: string) {
    const params = new HttpParams()
      .set('location', loc);

    return this.http.get(`${this.uri}/api/filter-jobs-by-location`, { params });
  }




}
