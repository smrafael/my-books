import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books;
  public showDeleteMsg: boolean = false;
  public showDeleteMsgError: boolean = false;

  constructor(private bs: BookService) { }

  remove(id: string) {
    this.bs.remove(id)
      .then(() => {
        this.showDeleteMsg = true
        setTimeout(() => {
          this.showDeleteMsg = false
        }, 3000)
      })
      .catch(() => {
        this.showDeleteMsgError = true
        setTimeout(() => {
          this.showDeleteMsgError = false
        }, 3000)
      })
  }

  ngOnInit() {
    this.bs.all().subscribe(
      res => this.books = res
    );
  }

}
