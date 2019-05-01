import { Routes, RouterModule } from '@angular/router';
import { SinglejobComponent } from './singlejob/singlejob.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostjobComponent } from './postjob/postjob.component';
import { FormsModule } from '@angular/forms';
import { BackendCommunicatorService } from './backend-communicator.service';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchJobsWithFiltersComponent } from './search-jobs-with-filters/search-jobs-with-filters.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AppComponent } from './app.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import { UrlPermission } from "./urlPermission/url.permission";
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [


    { path: 'homepage', component: HomePageComponent, canActivate: [UrlPermission] },
    { path: 'login', component: LoginComponent },
  
    { path: 'register', component: RegisterComponent },
    { path: 'alljobs', component: AlljobsComponent ,canActivate: [UrlPermission]},
    { path: 'advancedjobsearch', component: SearchJobsWithFiltersComponent ,canActivate: [UrlPermission]},
    { path: 'job/:jobid', component: SinglejobComponent,canActivate: [UrlPermission] },
    { path: 'postjob', component: PostjobComponent },
    // otherwise redirect to profile
    { path: '**', redirectTo: '/login' },

  
    // otherwise redirect to profile
    /*   { path: '**', redirectTo: '/login' },
      { path: 'homepage', component: HomePageComponent },
     
    
      { path: 'register', component: RegisterComponent },
      ,
      { path: 'signin', component: SigninComponent },
      */
    // { path: '', component: AppComponent},
    //{ path: '**', component: PageNotFoundComponent },
  ];
  


export const routing = RouterModule.forRoot(appRoutes);
