import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { AuthServiceService} from './service/auth-service.service';

import {
  MatButtonModule, MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSliderModule, MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { SettingsComponent } from './settings/settings.component';
import { TimelapseComponent } from './timelapse/timelapse.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './auth/auth.guard';
import {canActivate} from '@angular/fire/auth-guard';
import { WebcamComponent } from './webcam/webcam.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent,
  data: {animation: 'Home'}, canActivate: [AuthGuard]},
  { path: 'signin', component: SigninComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full'},
  { path: 'graph', component: GraphComponent, canActivate: [AuthGuard]},
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  { path: 'timelapse', component: TimelapseComponent, canActivate: [AuthGuard]},
  { path: 'webcam', component: WebcamComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SigninComponent,
    HeaderComponent,
    GraphComponent,
    SettingsComponent,
    TimelapseComponent,
    WebcamComponent
  ],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    MatSliderModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDividerModule,
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
