import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LoginService } from './services/login.service';
import { UserManagementService } from './services/user-management.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthguardGuard } from './authguard.guard';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', canActivate: [AuthguardGuard], component: HomeComponent },
  { path: 'user', canActivate: [AuthguardGuard], component: UserComponent },
  { path: 'aboutus', canActivate: [AuthguardGuard], component: AboutusComponent },
  { path: 'user-management', canActivate: [AuthguardGuard], component: UserManagementComponent },
  { path: '**', canActivate: [AuthguardGuard], component: LoginComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService, AuthguardGuard, UserManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
