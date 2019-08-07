import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angularForm: FormGroup;
  error: boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {

    this.createForm();
  }

  createForm() {
    this.angularForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  doLogin(value) {
    this.error = false;
    this.authService.doLogin(value).then(res => {
      this.router.navigate(['/books'])
    }, err => {
      this.error = true;
    })
  }

  ngOnInit() {

  }

}
