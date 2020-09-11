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
      'fullName': [this.userSignUp.fullName, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(50)]],
      'email': [this.userSignUp.email, [Validators.required, Validators.pattern('/\S+@\S+\.\S+/'), Validators.minLength(50)]],
      'phoneNumber': [this.userSignUp.phoneNumber, [Validators.required, Validators.pattern('[0-9]{10}')]],
      'restroName': [this.userSignUp.restroName, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(50)]],
      'seats': [this.userSignUp.seats, [Validators.required, Validators.minLength(5)]],
      'date': [this.userSignUp.date, [Validators.required, Validators.minLength(50)]],
      'country': [this.userSignUp.country,
        [Validators.required]
      ]
    });
  }
  /**
   * @method submitSignUp()
   * @desc used to submit signup form details and navigate to home page.
   */
  submitSignUp(): void {
    this.userSignUp = this.signUp.value;
    localStorage.setItem('userName', `${this.userSignUp.fullName}` );
    this.router.navigate(['/home']);
  }

}
