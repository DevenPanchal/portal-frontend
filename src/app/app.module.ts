import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlljobsComponent } from './alljobs/alljobs.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md'

import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatMenuModule, MatSidenavModule, MatListModule, MatRadioModule
} from '@angular/material';
import { SinglejobComponent } from './singlejob/singlejob.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostjobComponent } from './postjob/postjob.component';
import { FormsModule } from '@angular/forms';
import { BackendCommunicatorService } from './backend-communicator.service';
import { SigninComponent } from './signin/signin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchJobsWithFiltersComponent } from './search-jobs-with-filters/search-jobs-with-filters.component';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'job/:jobid', component: SinglejobComponent },
  { path: 'alljobs', component: AlljobsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'postjob', component: PostjobComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'advancedjobsearch', component: SearchJobsWithFiltersComponent }
  // { path: '', component: AppComponent},
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AlljobsComponent,
    SinglejobComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PostjobComponent,
    SigninComponent,
    HomePageComponent,
    SearchJobsWithFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatMenuModule, MatSidenavModule, MatListModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule

  ],
  providers: [BackendCommunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
