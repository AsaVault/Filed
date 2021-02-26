import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/user-details-dto';

@Component({
  selector: 'app-let-start',
  templateUrl: './let-start.component.html',
  styleUrls: ['./let-start.component.css']
})
export class LetStartComponent implements OnInit {
user: IUser[] = <IUser[]>{};
form: FormGroup;
submitted = false;
error_summary: string[];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private paymentservice:ServiceService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.paymentservice.todos = this.user;
    console.log(this.user);
  }

  initializeForm()
  {
    this.form = this.formBuilder.group({
        budget: ['', Validators.required],
        
      }
    );
  }

    // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      this.router.navigateByUrl('/form');
    }
}
