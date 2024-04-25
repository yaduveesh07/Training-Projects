import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../employ.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeId!: number;
  employee!: Employee;
  isEdit = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employeeForm = this.route.snapshot.params['id'];
    if (this.employeeId) {
      this.isEdit = true;
      this.employeeService.getEmployeeById(this.employeeId);
    }
    // this.employeeForm.patchValue(this.data);
    this.saveEmployee();
  }

  saveEmployee() {
    this.employeeForm = this.formBuilder.group({
      empId: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      dob: [''],
      joiningDate: [''],
      address: [''],
      salary: [''],
      departmentId: [''],
    });
  }

  onSubmit(): void {
    const formData = this.employeeForm.value;
    if (this.isEdit) {
      this.employeeService
        .updateEmployee(this.employeeId, this.employee)
        .subscribe(
          (response) => {
            console.log('Employee Updated successfully:', response);
            this.router.navigateByUrl('/employee');
          },
          (error) => {
            console.error('Error creating employee:', error);
          }
        );
    } else {
      this.employeeService.createEmployee(formData).subscribe(
        (response) => {
          console.log('Employee created successfully:', response);
          this.router.navigateByUrl('/employee');
          this.employeeService.getEmployees();
        },
        (error) => {
          console.error('Error creating employee:', error);
        }
      );
    }
  }
}
