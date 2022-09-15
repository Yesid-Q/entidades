export enum AlertType {
  Success,
  Error,
  Info,
  Warning,
}

export interface IAlert {
  type: AlertType;
  message: string;
  show: boolean;
}