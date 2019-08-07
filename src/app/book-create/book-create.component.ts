import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router' 
import { Book } from './../dtos/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  angularForm: FormGroup;
  updatedId: string;
  success: boolean = false;
  error: boolean = false;
  btnSaveLbl: string = 'Save';

  constructor(private fb: FormBuilder, 
    private bs: BookService, 
    private router: Router,
    private route: ActivatedRoute) { }

  initCreateForm() {
    this.angularForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      rating: ['', Validators.required],
      done: [false]
    });
  }

  initUpdateForm(book: Book) {
    this.angularForm = this.fb.group({
      title: [book.title, Validators.required],
      author: [book.author, Validators.required],
      rating: [book.rating, Validators.required],
      done: [book.done]
    });
  }

  save() {  
    this.btnSaveLbl = 'Loading...';
    let book = new Book(this.angularForm.value);
    this.angularForm.reset();
    if (this.updatedId) {
      this.updateBook(book);
    } else {
      this.saveBook(book);
    }
  }

  saveBook(book: Book) {
    this.bs.save(book)
      .then(res => {
        this.btnSaveLbl = 'Saved';
        this.success = true;
        setTimeout(() => {
          this.router.navigate(['/books']);
        }, 1500)
      })
      .catch(err => {
        console.log(err);
        this.btnSaveLbl = 'Save';
        this.error = true;
      });
  }

  updateBook(book: Book) {
    this.bs.update(this.updatedId, book)
      .then(res => {
        this.btnSaveLbl = 'Saved';
        this.success = true;
        setTimeout(() => {
          this.router.navigate(['/books']);
        }, 1500)
      })
      .catch(err => {
        console.log(err);
        this.btnSaveLbl = 'Save';
        this.error = true;
      });
  }

  ngOnInit() {
    this.initCreateForm();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.bs.get(params['id']).subscribe(res => {
          this.updatedId = res.id;
          if (res.data()) {
            this.initUpdateForm(new Book(res.data()));
          } else {
            console.error(this.updatedId + ' not found');
            this.router.navigate(['']);
          }
        });
      }
    });
  }

}
