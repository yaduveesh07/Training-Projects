import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartmentComponent } from './add-department/add-department.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent {
  constructor(public dialog: MatDialog) {}

  addDepartment() {
    const dialogRef = this.dialog.open(AddDepartmentComponent);
  }
}
