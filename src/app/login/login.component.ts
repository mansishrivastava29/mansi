import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;

  addForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    organization: new FormControl('', Validators.required),
  });

  constructor(public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true;
    if (this.addForm.valid) {
      this.router.navigateByUrl('/listing');
    }
  }

}
