import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';



import { BookService } from './services/book.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

var firebaseConfig = {
  apiKey: "AIzaSyBhP_Z7KX3I0xrVMRjcnFP_Q8DKM-8d9pk",
  authDomain: "my-books-34d9c.firebaseapp.com",
  databaseURL: "https://my-books-34d9c.firebaseio.com",
  projectId: "my-books-34d9c",
  storageBucket: "my-books-34d9c.appspot.com",
  messagingSenderId: "1592658911",
  appId: "1:1592658911:web:13eb63ff1427ed12"
};

@NgModule({
  declarations: [
    AppComponent,
    BookCreateComponent,
    BookListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FontAwesomeModule
  ],
  providers: [
    BookService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(faCheckCircle);
    library.add(faEdit);
    library.add(faTrash);
  }
}
