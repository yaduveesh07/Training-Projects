import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee-service.service';
import { EmployeeGridDatatableComponent } from './employee/employee-grid-datatable/employee-grid-datatable.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DepartmentGridDatatableComponent } from './departments/department-grid-datatable/department-grid-datatable.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { DepartmentComponent } from './departments/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeGridDatatableComponent,
    EditEmployeeComponent,
    DepartmentGridDatatableComponent,
    EditDepartmentComponent,
    AddDepartmentComponent,
    DepartmentComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    NgScrollbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    EmployeeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
