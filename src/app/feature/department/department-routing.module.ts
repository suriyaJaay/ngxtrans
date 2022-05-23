import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentComponent } from './components/list-department/list-department.component';
import { DepartmentComponent } from './department.component';

const routes: Routes = [
  /* { path: '', component: DepartmentComponent } */
  { path: '', component: ListDepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
