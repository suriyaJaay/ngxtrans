import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTestComponent } from './components/form-test/form-test.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';

const routes: Routes = [
  { path: '', redirectTo: 'my-orders', pathMatch: 'full' },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'forms', component: FormTestComponent },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./feature/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./feature/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
  {
    path: 'department',
    loadChildren: () =>
      import('./feature/department/department.module').then(
        (m) => m.DepartmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
