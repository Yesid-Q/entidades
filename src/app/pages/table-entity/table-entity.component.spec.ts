import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/shared/pipes/filter/filter.pipe';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { EntityService } from 'src/app/shared/services/entity/entity.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { TableEntityComponent } from './table-entity.component';

describe('TableEntityComponent', () => {
  let component: TableEntityComponent;
  let fixture: ComponentFixture<TableEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEntityComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        SharedModule
      ],
      providers: [
        EntityService,
        AlertService,
        FilterPipe
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
