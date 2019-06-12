import { cattle } from './cattles/cattle';

import { calf } from './calf';

export interface health {
    date: Date;
    history: string;
    symptoms: string;
    diagnosis: string;
    treatment: string;
    remarks: string;
    nameOfveterinaryDoctor: string;
    contactOfVeterinaryDoctor: number;
    costOfTreatment: number;
    cowhealth: cattle[];
    calfHealth: calf[];


}