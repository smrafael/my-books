import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

var firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "my-books-34d9c.firebaseapp.com",
  databaseURL: "https://my-books-34d9c.firebaseio.com",
  projectId: "my-books-34d9c",
  storageBucket: "my-books-34d9c.appspot.com",
  messagingSenderId: "1592658911",
  appId: "1:1592658911:web:13eb63ff1427ed12"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
