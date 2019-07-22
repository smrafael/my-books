import { Book } from './../dtos/book';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private collectionName = 'books';

  constructor(private firestore: AngularFirestore) { }

  save(book: Book) {
    delete book.id;
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection(this.collectionName)
          .add(book)
          .then(res => {}, err => reject(err));
    });
  }

  all() {

  }

  update(id: string, book: Book) {

  }

  remove(id: string) {

  }

}
