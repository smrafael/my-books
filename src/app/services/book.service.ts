import { Book } from './../dtos/book';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { merge } from 'rxjs';

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
          .add(Object.assign({}, book))
          .then(res => resolve(), err => reject(err));
    });
  }

  all() {
    return this.firestore
      .collection(this.collectionName)
      .snapshotChanges();
  }

  get(id: string) {
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .get();
  }

  update(id: string, book: Book) {
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .set(Object.assign({}, book), { merge: true })
  }

  remove(id: string) {
    return this.firestore
       .collection(this.collectionName)
       .doc(id)
       .delete();
  }

}
