import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button [ngStyle]="{
    '--color': 'var(--color-'+color+')',
    '--color-contrast': 'var(--color-'+color+'-contrast)',
    '--color-shade': 'var(--color-'+color+'-shade)'
  }" [disabled]="disabled">
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() color: string;

  @Input() disabled: boolean;

  constructor() {
    this.color = 'primary';
    this.disabled = false;
  }

}
