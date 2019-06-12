import { breed } from './breed';

export interface cattle{
    cowTag: string;  
    name: string;
    breed: breed[];
    dateAcquired: Date;

}