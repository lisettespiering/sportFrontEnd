import { Sport } from './sport';

export class Account {


        id: number
        naam: string
        wachtwoord: string
        sport: Sport = new Sport()
        favorietePlekken: string[]
        woonplaats: string
        aanmaakdatum: number
        email: string
        constructor()
        {

    }


}
