import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableEntityComponent } from './table-entity.component';

const routes: Routes = [
  {
    path: '',
    component: TableEntityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableEntityRoutingModule { }
