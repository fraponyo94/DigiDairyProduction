import { cattle } from './cattle';

export interface breeding{
  
    date: Date;  
    dueDate: Date;
    methodOfInsemination: string;
    reproductiveCondition: string;    
    reproductiveTreatment: string;
    cow: cattle[];

}