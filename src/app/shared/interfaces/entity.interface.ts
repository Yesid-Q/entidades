export interface IEntity {
  entityId: number;
  name: string;
  identificationNumber: string;
  attributeValidator: unknown | null;
  expirationDate: string;
  contactName: string;
  contactMail: string;
  ipAddress: string;
  logo: string;
  domain: unknown | null;
  check: boolean;
}

export interface IEntityResponse {
  code: string;
  message: string;
  type: string;
  data: IEntity;
  traceId: string;
}
