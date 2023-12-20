import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-material-app',
  templateUrl: './material-app.component.html',
  styleUrls: ['./material-app.component.css']
})
export class MaterialAppComponent {
  profileForm: any;
  
}
