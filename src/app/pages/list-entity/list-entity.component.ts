import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEntity } from 'src/app/shared/interfaces/entity.interface';
import { AlertService } from 'src/app/shared/services/alert/alert.service';

import { EntityService } from 'src/app/shared/services/entity/entity.service';


@Component({
  selector: 'app-list-entity',
  templateUrl: './list-entity.component.html',
  styleUrls: ['./list-entity.component.scss']
})
export class ListEntityComponent implements OnInit {

  loading: boolean;

  listEntity: IEntity[];

  constructor(
    private _router: Router,
    private _entityService: EntityService,
    private _alertService: AlertService
  ) {
    this.loading = false;
    this.listEntity = [];
  }

  ngOnInit(): void {
    this.loading = true;
    this._entityService.getAll().subscribe((res) => {
      this.listEntity = res;
      this.loading = false;
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

  /**
   * @method onSelectedEntity
   * Marca la entidades para poder generar
   * una tabla mas detallada
   * @param entity Elemento del array
   * @author Yesid Gonzalez
   */
  onSelectedEntity(entity: IEntity): void {
    entity.check = !entity.check;
  }

  /**
   * @method onGenerateTable
   * Prepara el listado con el cual se genera
   * la tabla con mas dettales y navega a la pagina
   * @author Yesid Gonzalez
   */
  onGenerateTable(): void {
    const ids = this.listEntity.filter((e) => e.check).map((e) => e.entityId);
    if(!ids.length) {
      this._alertService.showError('Selecciona elementos.');
      return;
    }
    void this._router.navigate(['table'], {queryParams: { ids }});
  }

}
