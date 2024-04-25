import { Component } from '@angular/core';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  constructor(public dialog: MatDialog) {}

  addEmployee() {
    const dialogRef = this.dialog.open(AddEmployeeComponent);
  }
}
