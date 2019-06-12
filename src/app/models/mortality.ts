import { cattle } from './cattles/cattle';

export interface mortality {
    cow: cattle[];
    postMortemreport: string;
    findings: string;
    date: Date;
   

}
