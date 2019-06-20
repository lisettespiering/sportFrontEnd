import { Rating } from './rating';
import { Account } from './account';

export class Review {

   
        id: number
        titel: string 
        account : Account
        inhoud: string
        rating: Rating
        bijzonderheden: string[]
        locatie: string
        
    }



