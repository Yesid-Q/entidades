import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEntityComponent } from './list-entity.component';

const routes: Routes = [
  {
    path: '',
    component:  ListEntityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEntityRoutingModule { }
