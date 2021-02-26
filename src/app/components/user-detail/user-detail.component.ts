import { NotifyService } from './../../notify.service';
import { ServiceService } from './../../service.service';
import { IUser } from './../../models/user-details-dto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
user: IUser = <IUser>{ phoneNumber: 1233, email: "sdsd@gmail.com", firstName: "Sam", lastName: "Olan", monthlyAdvertisingBudget: 500};
form: FormGroup;

submitted = false;
error_summary: string[];
  constructor(
    private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
     private router: Router,
     private notificationService : NotifyService,
    private paymentService: ServiceService
  ) { }

  ngOnInit() {
this.initializeForm();
  }

  initializeForm()
  {
    this.form = this.formBuilder.group({
        email: ['', Validators.required],
        phonenumber: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        budget: ['', Validators.required],
      }

      
    );
  }

    // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      // this.alertService.clear();

      //stop here if form is invalid
      if (this.form.invalid) {
          return;
      }
      this.router.navigateByUrl('/start');
      console.log("working");
      this.paymentService.addTodo(this.user);
      
      //this.paymentService.post(this.form);
      this.notificationService.showSuccess("Payment was successful", "Successful");
    }
}
