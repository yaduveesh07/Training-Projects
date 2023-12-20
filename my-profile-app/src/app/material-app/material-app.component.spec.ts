import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAppComponent } from './material-app.component';

describe('MaterialAppComponent', () => {
  let component: MaterialAppComponent;
  let fixture: ComponentFixture<MaterialAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialAppComponent]
    });
    fixture = TestBed.createComponent(MaterialAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
