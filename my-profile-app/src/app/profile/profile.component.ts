import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from './profile';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  initialUrl = '';
  title = 'my-profile-app';
  profile: Profile = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    imageurl: '',

  }

  @Output() profileSubmit = new EventEmitter<string>
  constructor() { }

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
  }

  onSubmit() {
    console.log(this.profile);
    localStorage.setItem("profile", JSON.stringify(this.profile))
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

