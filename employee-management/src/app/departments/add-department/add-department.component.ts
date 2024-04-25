import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../deparment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css',
})
export class AddDepartmentComponent implements OnInit {
  departmentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService
  ) {}

  ngOnInit() {
    this.departmentForm = this.formBuilder.group({
      departmentId: [''],
      departmentName: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const formData = this.departmentForm.value;
    this.departmentService.createDepartment(formData).subscribe(
      (response) => {
        console.log('Employee created successfully:', response);
      },
      (error) => {
        console.error('Error creating employee:', error);
      }
    );
  }
}
