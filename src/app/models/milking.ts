import { cattle } from './cattles/cattle';

export interface milking {
    cow: cattle[];
    date: Date;
    firstMilking: number;
    secondMilking: number;
    otherMilking: number;
    // total: number;
    unitsSold: number;
    pricePerUnit: number;

}