import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registers',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUp: FormGroup;
  serverErrorType;
  userSignUp = {
    fullName: '',
    email: '',
    phoneNumber: '',
    restroName: '',
    seats: '',
    date: Date.now,
    country: ''
  }; // user details
  obj = Object.getOwnPropertyNames;
  countryList = ['Afghanistan', 'Antigua and Barbuda', 'Argentina', 'Armenia',
  'Aruba', 'Australia', 'Austria', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'India']; // Country list
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }
  /**
   * @method ngOnInit()
   * @desc used to initialize page.
   */
  ngOnInit() {
    localStorage.setItem('userName', '');
    this.buildForm();
    this.signUp.controls['country'].setValue('India');
  }
  /**
   * @method buildForm()
   * @desc used to build form with validation
   */
  buildForm(): void { // reactive form
    this.signUp = this.formBuilder.group({
      'fullName': [this.userSignUp.fullName],
      'email': [this.userSignUp.email],
      'phoneNumber': [this.userSignUp.phoneNumber],
      'restroName': [this.userSignUp.restroName],
      'seats': [this.userSignUp.seats],
      'date': [this.userSignUp.date],
      'country': [this.userSignUp.country
      ]
    });
  }
  /**
   * @method submitSignUp()
   * @desc used to submit signup form details and navigate to home page.
   */
  submitSignUp(): void {
      this.userSignUp = this.signUp.value;
      // tslint:disable-next-line:max-line-length
      localStorage.setItem('userName', `${this.userSignUp.fullName}` );
      this.router.navigate(['/home']);
  }

}
