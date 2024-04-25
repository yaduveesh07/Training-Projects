import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'employee-management';
}
