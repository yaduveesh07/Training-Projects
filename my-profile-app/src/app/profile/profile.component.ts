import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from './profile';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  submitted = false;
  initialUrl = '';
  emails = '';
  title = 'my-profile-app';
  profile: Profile = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    imageurl: '',
  }

  @Output() profileSubmit = new EventEmitter<string>

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const profileData: Profile | null = JSON.parse(localStorage.getItem("profile")!)
    console.log(profileData);
    this.profile = profileData as Profile;
    if (this.profile.imageurl) {
      this.initialUrl = this.profile.imageurl;
    }
    else {
      this.initialUrl = '/assets/images/add-image.jpg';
    }

    this.profileForm = this.formBuilder.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        lastname: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]]
      },
    );
  }

  get firstName() {
    return this.profileForm.get('firstname');
  }

  onSubmit() {
    console.log(this.profile);
    localStorage.setItem("profile", JSON.stringify(this.profile))

    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.profileForm.value, null, 2));
  }

  onSelect(event: any) {
    if (event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.initialUrl = event.target.result;
        this.profile.imageurl = this.initialUrl;
        localStorage.setItem("profile", JSON.stringify(this.profile))
      }
    }
  }
}









// this.form = this.formBuilder.group(
//   {
//     firstname: ['', 
//         Validators.required,
//         Validators.minLength(6),
//         Validators.maxLength(20)
//     ],
//      lastname: ['', 
//         Validators.required,
//         Validators.minLength(6),
//         Validators.maxLength(20)
//     ],
//     email: ['', [Validators.required, Validators.email]],
//     acceptTerms: [false, Validators.requiredTrue]
//   },
// );

