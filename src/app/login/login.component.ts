import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  userForm = new FormGroup({
    'username': new FormControl(),
    'password': new FormControl(),
    'alerts': new FormControl()
  });

  ngOnInit(): void {
  }

  onClick()
  {
    console.log(this.userForm.controls['username'].value);

    var username = this.userForm.controls['username'].value;
    var password = this.userForm.controls['password'].value;

    if(username != "admin@gmail.com" || password != "password")
    {
      console.log("not autorize");
      this.userForm.controls['alerts'].setValue("Not Autorize!");
      return;
    }

    this.router.navigate(['courses']);
  }
}
