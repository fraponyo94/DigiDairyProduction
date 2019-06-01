import { Role } from './role';

export class Account{
    enabled: boolean;
    roles: Role[];
    resetToken: string;
}