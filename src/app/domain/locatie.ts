import { Sport } from './sport';

export class Locatie {

    constructor(
        private _id: number, 
        private _naam: string, 
        private _adres: string, 
        private _sport: Sport,
        ) 
        {

    }

    get id() : number { return this._id}
    get naam() : string { return this._naam}
    get adres() : string { return this._adres}
    get sport() : Sport { return this._sport}
    
    
}

