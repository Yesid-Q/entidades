import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./pages/list-entity/list-entity.module').then((m) => m.ListEntityModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./pages/table-entity/table-entity.module').then((m) => m.TableEntityModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
