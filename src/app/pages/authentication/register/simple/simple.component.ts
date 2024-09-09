import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class RegisterSimpleComponent implements OnInit {

  public show: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

  login()
  {
    this.router.navigate(['/users']);
  }

}
