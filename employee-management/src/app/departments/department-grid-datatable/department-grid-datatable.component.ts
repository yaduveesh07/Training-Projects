import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentService } from '../../deparment.service';
import { Department } from '../../department.model';
import { EditDepartmentComponent } from '../edit-department/edit-department.component';

@Component({
  selector: 'app-department-grid-datatable',
  templateUrl: './department-grid-datatable.component.html',
  styleUrl: './department-grid-datatable.component.css',
})
export class DepartmentGridDatatableComponent {
  department: Department[] = [];
  displayedColumns: string[] = ['departmentId', 'departmentName', 'more_vert'];

  dataSource = new MatTableDataSource<Department | undefined>([]);

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(
    private departmentService: DepartmentService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((tasks) => {
      this.department = tasks;
    });
  }

  editDepartment(id: number): void {
    this.dialog.open(EditDepartmentComponent);
    console.log('Editing department:', id);
  }

  deleteDepartment(id: number) {
    if (confirm('Are you sure you want to delete this department?')) {
      this.departmentService.deleteDepartmentById(id).subscribe(() => {
        this.department = this.department!.filter(
          (department) => department.departmentId !== id
        );
      });
    }
  }
}
