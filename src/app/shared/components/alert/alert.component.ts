import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertType } from '../../models/type-alert.model';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  
  type: AlertType;

  message: string;

  show: boolean;
  
  constructor(public alertService: AlertService) {
    this.type = AlertType.Info;
    this.message = '';
    this.show = false;
  }

  onRemoveAlert(): void {
    this.alertService.close();
  }

  cssClass(type: AlertType): string {
    switch (type) {
      case AlertType.Success:
        return 'alert-success';
      case AlertType.Error:
        return 'alert-danger';
      case AlertType.Info:
        return 'alert-primary';
      default:
        return 'alert-warning';
    }
  }
}
