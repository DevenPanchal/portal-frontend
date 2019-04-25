import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlljobsComponent } from './alljobs/alljobs.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


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
import { SigninComponent } from './signin/signin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchJobsWithFiltersComponent } from './search-jobs-with-filters/search-jobs-with-filters.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { UrlPermission } from "./urlPermission/url.permission";
import {AccountService} from './services/account.service';
import{AuthService} from './services/auth.service';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to profile
  { path: '**', redirectTo: '/login' },
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
    SearchJobsWithFiltersComponent, ProfileComponent, LoginComponent
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
  providers: [BackendCommunicatorService,AuthService,AccountService,UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
