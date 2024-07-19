import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { EnumKeyPipe, EnumToDropdownPipe } from './services/enum-key.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxApexchartsModule } from 'ngx-apexcharts';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { NameDetailComponent } from './name-detail/name-detail.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { GridDatatableComponent } from './grid-datatable/grid-datatable.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    EnumKeyPipe,
    EnumToDropdownPipe,
    TaskDetailComponent,
    ContactDetailComponent,
    NameDetailComponent,
    AddressDetailComponent,
    GridDatatableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressBarModule,
    FormsModule,
    MatStepperModule,
    MatDialogModule,
    HttpClientModule,
    MatGridListModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    DragDropModule,
    MatIconModule,
    MatAutocompleteModule,
    NgxApexchartsModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatDatepickerModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
