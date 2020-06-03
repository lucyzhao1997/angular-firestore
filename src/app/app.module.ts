import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthenticationComponent } from './authentication/authentication.component';

const firebaseConfig = {
  apiKey: "AIzaSyBsg7UYcWGKy7qgidm4ENynz5A6YVrzdxY",
  authDomain: "app-lucy.firebaseapp.com",
  databaseURL: "https://app-lucy.firebaseio.com",
  projectId: "app-lucy",
  storageBucket: "app-lucy.appspot.com",
  messagingSenderId: "806861947954",
  appId: "1:806861947954:web:a5a75cea87bde96907282b",
  measurementId: "G-FXTRSY1Q8S"
};

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
