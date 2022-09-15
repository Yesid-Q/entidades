import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ButtonComponent } from './components/button/button.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    TableComponent,
    SpinnerComponent,
    ButtonComponent,
    FilterPipe,
    AlertComponent,
    ModalComponent
  ],
  exports: [
    TableComponent,
    SpinnerComponent,
    ButtonComponent,
    FilterPipe,
    AlertComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
