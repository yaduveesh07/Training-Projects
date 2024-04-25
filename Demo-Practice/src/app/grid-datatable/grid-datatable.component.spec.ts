import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDatatableComponent } from './grid-datatable.component';

describe('GridDatatableComponent', () => {
  let component: GridDatatableComponent;
  let fixture: ComponentFixture<GridDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridDatatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
