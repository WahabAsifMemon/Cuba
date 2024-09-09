import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public show: boolean = false;
  public loginForm: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  showPassword() {
    this.show = !this.show;
  }

  login() {
    // Simulate a simple login flow. After successful login, navigate to users' page
    if (this.loginForm.valid) {
      this.router.navigate(['/users']);
    }
  }

  register() {
    // Navigate to the registration page
    this.router.navigate(['/authentication/register/simple']);
  }
}
