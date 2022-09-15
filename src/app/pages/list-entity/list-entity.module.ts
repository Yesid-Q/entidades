import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEntityRoutingModule } from './list-entity-routing.module';
import { ListEntityComponent } from './list-entity.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListEntityComponent
  ],
  imports: [
    CommonModule,
    ListEntityRoutingModule,
    SharedModule
  ]
})
export class ListEntityModule { }
