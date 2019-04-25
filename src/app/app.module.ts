import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import {routing} from "./app.routing";
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FacebookModule } from "ngx-facebook";
import { HttpModule } from "@angular/http";
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostjobComponent } from './postjob/postjob.component';
import { FormsModule } from '@angular/forms';
import { BackendCommunicatorService } from './backend-communicator.service';

import { HomePageComponent } from './home-page/home-page.component';
import { SearchJobsWithFiltersComponent } from './search-jobs-with-filters/search-jobs-with-filters.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { UrlPermission } from "./urlPermission/url.permission";
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AlljobsComponent,
    SinglejobComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PostjobComponent,
    HomePageComponent,
    SearchJobsWithFiltersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
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
  
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule,
     HttpModule,
     FacebookModule.forRoot(),
     routing

  ],
  providers: [BackendCommunicatorService, AuthService, AccountService, UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
