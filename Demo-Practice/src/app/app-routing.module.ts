import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { GridDatatableComponent } from './grid-datatable/grid-datatable.component';

const routes: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  { path: 'grid-data-table', component: GridDatatableComponent },
  { path: 'task-detail/:id', component: TaskDetailComponent },
  { path: 'contact-detail/:id', component: ContactDetailComponent },
  { path: 'address-detail/:id', component: AddressDetailComponent },
];

const routerOptions: ExtraOptions = {
  useHash: true, // Enable hash based routing
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
