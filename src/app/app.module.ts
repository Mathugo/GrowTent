import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatSliderModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { SettingsComponent } from './settings/settings.component';
import { TimelapseComponent } from './timelapse/timelapse.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent,
  data: {animation: 'Home'}},
  { path: 'signin', component: SigninComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full'},
  { path: 'graph', component: GraphComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'timelapse', component: TimelapseComponent},
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
    TimelapseComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
