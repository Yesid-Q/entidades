import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IEntity } from 'src/app/shared/interfaces/entity.interface';

@Component({
  selector: 'app-form-entity',
  templateUrl: './form-entity.component.html',
  styleUrls: ['./form-entity.component.scss']
})
export class FormEntityComponent implements OnChanges {

  @Input() valueEntity: IEntity|undefined;

  @Output() saveEntity: EventEmitter<IEntity>;

  @Output() closeModal: EventEmitter<void>;

  formEntity: FormGroup;

  constructor() {
    this.formEntity = new FormGroup({
      entityId: new FormControl(null),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      identificationNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      expirationDate: new FormControl(null, [
        Validators.required
      ]),
      contactName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      contactMail: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      ipAddress: new FormControl(null, [
        Validators.maxLength(20)
      ]),
      logo: new FormControl(null, []),
    });
    this.valueEntity = undefined;
    this.saveEntity = new EventEmitter<IEntity>();
    this.closeModal = new EventEmitter();
  }

  @HostListener('submit')
  onSumnit(): void {
    if(this.formEntity.invalid) {
      this.formEntity.markAllAsTouched();
      return;
    }
    this.saveEntity.emit(this.formEntity.value);
  }

  ngOnChanges(change: SimpleChanges): void {
    if(change['valueEntity'].currentValue === undefined) {
      this.formEntity.reset();
    } else {
      this.formEntity.patchValue({
        ...this.valueEntity
      });
    }
  }

}
