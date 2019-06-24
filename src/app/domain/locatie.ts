import { Sport } from './sport';

export class Locatie {

    id: number;
    naam: string;
    adres: string;
    sport: Sport = new Sport();
    rating : number;

}

