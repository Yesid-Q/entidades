import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AlertType, IAlert } from '../../models/type-alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  message$$: BehaviorSubject<IAlert>;

  constructor() {
    this.message$$ = new BehaviorSubject<IAlert>({
      show: false,
      message: '',
      type: AlertType.Success
    });
  }

  get message(): Observable<IAlert> {
    return this.message$$.asObservable();
  }

  showSuccess(message: string): void  {
    this.#alert(AlertType.Success, message);
  }

  showWarning(message: string): void  {
    this.#alert(AlertType.Warning, message);
  }

  showError(message: string): void  {
    this.#alert(AlertType.Error, message);
  }

  showInfo(message: string): void  {
    this.#alert(AlertType.Info, message);
  }

  close(): void {
    this.message$$.next({type: AlertType.Info, message: '', show: false});
  }

  #alert(type: AlertType, message: string): void {
    this.message$$.next({type, message, show: true});
  }
}
