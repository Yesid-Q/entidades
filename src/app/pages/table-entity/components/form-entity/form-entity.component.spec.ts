import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEntityComponent } from './form-entity.component';

describe('FormEntityComponent', () => {
  let component: FormEntityComponent;
  let fixture: ComponentFixture<FormEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEntityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse correctamente.', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar formulario invalido.', () => {
    fixture.detectChanges();

    let name = component.formEntity.controls['name'];

    name.setValue('a');

    expect(component.formEntity.invalid).toBeTruthy();
  });

  it('Debe retornar formulario valido', () => {
    fixture.detectChanges();

    let name = component.formEntity.controls['name']; 
    let identificationNumber = component.formEntity.controls['identificationNumber'];
    let expirationDate = component.formEntity.controls['expirationDate'];
    let contactName = component.formEntity.controls['contactName'];
    let contactMail = component.formEntity.controls['contactMail'];

    name.setValue('yesid');
    identificationNumber.setValue('3546879464');
    expirationDate.setValue('12/02/2030');
    contactName.setValue('yesid gonzalez');
    contactMail.setValue('yesid1995gonzalez@gmail.com');

    expect(component.formEntity.invalid).toBeFalsy();

  });
});
