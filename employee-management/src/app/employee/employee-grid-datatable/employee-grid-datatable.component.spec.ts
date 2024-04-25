import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGridDatatableComponent } from './employee-grid-datatable.component';

describe('EmployeeGridDatatableComponent', () => {
  let component: EmployeeGridDatatableComponent;
  let fixture: ComponentFixture<EmployeeGridDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeGridDatatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeGridDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
