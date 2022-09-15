import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableEntityRoutingModule } from './table-entity-routing.module';
import { TableEntityComponent } from './table-entity.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormEntityComponent } from './components/form-entity/form-entity.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableEntityComponent,
    FormEntityComponent
  ],
  imports: [
    CommonModule,
    TableEntityRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TableEntityModule { }
