import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of } from 'rxjs';

import { EntityService } from './entity.service';
import { IEntity } from '../../interfaces/entity.interface';
import { RESPONSE_ENTITY_SERVICE } from './data.spec';

describe('EntityService', () => {
  let service: EntityService;

  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        EntityService
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(EntityService);
  });

  it('Debe crearse correctamente.', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar objecto de entidad', fakeAsync((done: DoneFn) => {
    const response = RESPONSE_ENTITY_SERVICE[0]

    httpClientSpy.get.and.returnValue(of(response));

    service.getById(1).subscribe((res) => {
      expect(res).toEqual(response as IEntity);
      done();
    });
  }));

  it('Debe retornar un obejto vacio', fakeAsync((done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of({}));

    service.getById(20).subscribe((res) => {
      expect(res).toEqual({} as IEntity);
      done()
    });
  }));

  it('Debe retornar todas las entidades', fakeAsync((done: DoneFn) => {
    const response = RESPONSE_ENTITY_SERVICE;

    httpClientSpy.get.and.returnValue(of(response));

    service.getAll().subscribe((res) => {
      expect(res).toEqual(response as Array<IEntity>);
      done();
    });
  }));

  it('Debe retornar entidades segun los ids que quieran buscar', fakeAsync((done: DoneFn) => {
    const response = [
      RESPONSE_ENTITY_SERVICE[0],
      RESPONSE_ENTITY_SERVICE[4],
      RESPONSE_ENTITY_SERVICE[7]
    ];

    httpClientSpy.get.and.returnValue(of(response));

    service.getByIds([1,3,7]).subscribe((res) => {
      expect(res).toEqual(response as Array<IEntity>);
      done();
    });
  }));

});
