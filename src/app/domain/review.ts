import { Rating } from './rating';
import { Account } from './account';
import { Locatie } from './locatie';

export class Review {

   
        id: number;
        titel: string ;
        account : Account;
        inhoud: string;
        rating: Rating = new Rating();
        bijzonderheden: string[];
        locatie: Locatie;
        
    }



