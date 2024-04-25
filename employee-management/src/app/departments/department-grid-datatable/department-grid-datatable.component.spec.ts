import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentGridDatatableComponent } from './department-grid-datatable.component';

describe('DepartmentGridDatatableComponent', () => {
  let component: DepartmentGridDatatableComponent;
  let fixture: ComponentFixture<DepartmentGridDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentGridDatatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentGridDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
