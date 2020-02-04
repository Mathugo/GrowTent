import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule, MatMenuModule} from '@angular/material';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SigninComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
