import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEntity } from 'src/app/shared/interfaces/entity.interface';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { EntityService } from 'src/app/shared/services/entity/entity.service';
import { FakeService } from 'src/app/shared/services/fake/fake.service';
import { FormEntityComponent } from './components/form-entity/form-entity.component';

@Component({
  selector: 'app-table-entity',
  templateUrl: './table-entity.component.html',
  styleUrls: ['./table-entity.component.scss']
})
export class TableEntityComponent implements OnInit {

  loading: boolean;

  disabled: boolean;

  listEntity: IEntity[];
  
  filterField: string;

  asc: boolean;

  modal: boolean;

  editEntity: IEntity|undefined;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _entityService: EntityService,
    private _alertService: AlertService,
    private _fakeService: FakeService,
  ) {
    this.loading = false;
    this.disabled = false;
    this.listEntity = [];
    this.filterField = 'name',
    this.asc = true;
    this.modal = false;
    this.editEntity = undefined;
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      const ids = params['ids'] as undefined|number[]|string[];
      if(ids === undefined || ids.some((e) => e === 'undefined')) {
        this._router.navigate(['/']).then(() => {
          this._alertService.showWarning('Seleccione elmentos');
        });
      } else {
        this.loading = true;
        this._entityService.getByIds(ids as number[]).subscribe((res) => {
          this.listEntity = res;
          this.loading = false;
        });
      }
    });
  }

  /**
   * @method trackByEntities
   * permite identificar la iteracion
   * para mejorar el render en ngDoCheck
   * @param _index indice del array
   * @param entity elemento del array
   * @returns retorna campo unico
   * @author Yesid Gonzalez
   */
  trackByEntities(_index: number, entity: IEntity): number {
    return entity.entityId;
  }

  openModal(entity: IEntity): void {
    this.editEntity = entity;
    this.modal = true
  }

  closeModal(): void {
    this.editEntity = undefined;
    this.modal = false;
  }

  /**
   * @method onDeleteEntity
   * Elimina entidad por medio del id
   * @param id campo primario de la entidad
   * @author Yesid Gonzalez
   */
  onDeleteEntity(id: number): void {
    this.disabled = true;
    this._fakeService.fakeDelete().subscribe((v) => {
      this.disabled = false;
      this.listEntity = this.listEntity.filter((e) => e.entityId !== id);
      this._alertService.showInfo('Entidad eliminada!');
      if(!this.listEntity.length) {
        void this._router.navigate(['/']);
      }
    });
  }

  /**
   * @method onChangeFilterOrder
   * Cambia el campo a ordernar el listado de los productos
   * @param propertyName campo a filtrar
   * @author Yesid Gonzalez
   */
  onChangeFilterOrder(propertyName: string): void {
    this.asc = this.filterField === propertyName ? !this.asc : true;
    this.filterField = propertyName;
  }

  onEditEntity(entity: IEntity): void {
    this.closeModal();
    this.listEntity = this.listEntity.map((e) => {
      if(e.entityId === entity.entityId) {
        return {...entity};
      }
      return e;
    });
  }

}
