import { Rating } from './rating';

export class Review {

    constructor(
        private _id: number, 
        private _titel: string, 
        private _inhoud: string,
        private _rating: Rating,
        private _bijzonderheden: string[],
        private _locatie: string,
        ) 
        {
    }

    get id() : number { return this._id}
    get titel() : string { return this._titel}
    get inhoud() : string { return this._inhoud}
    get rating() : Rating { return this._rating}
    get bijzonderheden() : string[] { return this._bijzonderheden}
    get locatie() : string { return this._locatie}
      
}



