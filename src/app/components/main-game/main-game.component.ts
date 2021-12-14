import { Component, Input, OnInit } from '@angular/core';
import { GameStateService } from 'src/app/services/game-state.service';
import { SharedPlayerService } from '../../services/shared-player.service';
import { sleep } from '../../models/constants';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-game',
    templateUrl: './main-game.component.html',
    styleUrls: ['./main-game.component.css']
})
export class MainGameComponent implements OnInit {

    playerName: string;
    counter: number;
    colors: any = {
        red: false,
        blue: false,
        green: false,
        yellow: false,
        purple: false
    };

    constructor(public sharedService: SharedPlayerService, public gameStateService: GameStateService,private router: Router) { }


    ngOnInit() {
        this.playerName = this.sharedService.getPlayerName();
        //Checking if the player name was enterd,if not - the router will navigate the user back to home page 
        if (this.playerName == undefined) {
            alert("Please add your name first")
            this.router.navigate(['/'])
        }

        this.gameStateService.state.subscribe(state => {
            if (this.counter != state.count) {
                this.counter = state.count;
                this.teasePlayer(state.sequence);
            }

        });
        this.gameStateService.generateSequence();
    }


    playerGuess(e: string) {
        this.gameStateService.playerGuess(e);
        
    }

    async teasePlayer(guess: string[]) {
        for (let i = 0; i < guess.length; i++) {
            this.colors[guess[i]] = true;
            await sleep(1000);
            this.colors[guess[i]] = false;
            await sleep(200);
        }
    }

}



