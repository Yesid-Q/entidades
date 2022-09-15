import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { EntityService } from 'src/app/shared/services/entity/entity.service';

import { ListEntityComponent } from './list-entity.component';

describe('ListEntityComponent', () => {
  let component: ListEntityComponent;
  let fixture: ComponentFixture<ListEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntityComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        EntityService,
        AlertService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
