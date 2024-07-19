import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  switchMap,
  timer,
} from 'rxjs';
import { AppStateService } from '../services/header.service';
import { NameDetailComponent } from '../name-detail/name-detail.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

export enum FilterPeriod {
  Today = 'Today',
  ThisWeek = 'This Week',
  ThisMonth = 'This Month',
  Custom = 'Custom',
}

@Component({
  selector: 'app-grid-datatable',
  templateUrl: './grid-datatable.component.html',
  styleUrl: './grid-datatable.component.css',
})
export class GridDatatableComponent implements OnInit {
  applicationReady$: Observable<boolean> = of(false); // Initialize with of(false)

  constructor(private appStateService: AppStateService) {}

  ngOnInit() {
    this.applicationReady$ = this.appStateService.useApplicationReady$(); // Use the actual observable
  }
}
