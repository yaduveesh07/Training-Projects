import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { Employee } from '../../employ.model';
import { EmployeeService } from '../../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-grid-datatable',
  templateUrl: './employee-grid-datatable.component.html',
  styleUrl: './employee-grid-datatable.component.css',
})
export class EmployeeGridDatatableComponent implements OnInit {
  employee: Employee[] = [];
  displayedColumns: string[] = [
    'empId',
    'firstName',
    'lastName',
    'address',
    'phoneNo',
    'email',
    'dob',
    'joiningDate',
    'departmentId',
    'salary',
    'more_vert',
  ];

  dataSource = new MatTableDataSource<Employee | undefined>([]);

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employee) => {
      this.employee = employee;
    });
  }

  editEmployee(id: number): void {
    this.dialog.open(EditEmployeeComponent);
    this.router.navigateByUrl('/employee/' + id);
    console.log('Editing employee:', id);
  }

  // editEmployee(data: any): void {
  //   this.dialog.open(EditEmployeeComponent),
  //     {
  //       data,
  //     };
  // }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployeeById(id).subscribe(() => {
        this.employee = this.employee!.filter(
          (employee) => employee.empId !== id
        );
      });
      this.employeeService.getEmployees();
    }
  }
}
