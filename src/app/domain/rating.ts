export class Rating {

    constructor(
        private _id: number, 
        private _totaal: number, 
        private _moeilijkheid: number,
        private _locatie: number,
        private _personeel: number,
        private _sfeer: number,
        private _variatie: number, 
        private _bereikbaarheid: number) 
        {

    }

    get id() : number { return this._id}
    get totaal() : number { return this._totaal}
    get moeilijkheid() : number { return this._moeilijkheid}
    get locatie() : number { return this._locatie}
    get personeel() : number { return this._personeel}
    get sfeer() : number { return this._sfeer}
    get variatie() : number { return this._variatie}
    get bereikbaarheid() : number { return this._bereikbaarheid}
    
}

