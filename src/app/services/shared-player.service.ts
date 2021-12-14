import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedPlayerService {

    playerName:string;

    constructor() { }

    setPlayerName(data: string) {
        this.playerName=data;
    }
    getPlayerName(){
        return this.playerName;
    }
}
