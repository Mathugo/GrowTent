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
  MatButtonModule, MatCheckboxModule, MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule, MatProgressSpinnerModule,
  MatSliderModule, MatSnackBarModule, MatToolbarModule,
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
import { FooterComponent } from './footer/footer.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
 // data: {animation: 'Home'}},
  { path: 'signin', component: SigninComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full'},
  { path: 'graph', component: GraphComponent, canActivate: [AuthGuard]},
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  { path: 'timelapse', component: TimelapseComponent, canActivate: [AuthGuard]},
  { path: 'webcam', component: WebcamComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent },

];

const firebaseConfig = {
  apiKey: "AIzaSyAcRUgZHPKUJ-n5Ax14j_wPgkvIF9vJKp4",
  authDomain: "growtent-111ca.firebaseapp.com",
  databaseURL: "https://growtent-111ca.firebaseio.com",
  projectId: "growtent-111ca",
  storageBucket: "growtent-111ca.appspot.com",
  messagingSenderId: "205033270083",
  appId: "1:205033270083:web:e31d66f9a1ccac5c705df6",
  measurementId: "G-3ZXE38JVHE"
};
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
    WebcamComponent,
    FooterComponent
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
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatCheckboxModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
