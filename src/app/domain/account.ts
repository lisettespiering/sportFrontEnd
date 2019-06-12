export class account {

    constructor(
        private _id: number, 
        private _naam: string, 
        private _wachtwoord: string, 
        private _sport: Sport,
        private _favorietePlekken: ArrayList<String>,
        private _woonplaats: string,
        private _aanmaakdatum: number, 
        private _email: string) 
        {

    }

    get id() : number { return this._id}
    get naam() : string { return this._naam}
    get wachtwoord() : string { return this._wachtwoord}
    get sport() : Sport { return this._sport}
    get favorietePlekken() : string { return this._favorietePlekken}
    get woonplaats() : string { return this._woonplaats}
    get aanmaakdatum() : number { return this._aanmaakdatum}
    get email() : string { return this._email}
    
}
