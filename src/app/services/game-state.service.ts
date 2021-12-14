import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { COLORS, START_COUTNT } from '../models/constants';


@Injectable({
  providedIn: 'root'
})
export class GameStateService {

    count: number;
    bestScore: number = START_COUTNT;

    sequence: string[] =[];
    player: string[] = [];
    state = new Subject<any>();

    constructor() { 
        this.count = START_COUTNT;
    }


    //sequence
    private get randomColor(): string {
        return COLORS[Math.floor(Math.random() * 6)];
    }

    appendSequence(increment: boolean = false): void {
        if (increment) {
            //this.count++;
            this.count=this.count+10;
        }
        this.sequence.push(this.randomColor);
    }

    generateSequence(): string[] {
        this.sequence = [];
        for (let i = 0; i< this.count; i++) {
            this.appendSequence();
        }
        
        this.setState();
        return this.sequence;
    }

    restartSequence(): string[] {
        if (this.count > this.bestScore) {
            this.bestScore = this.count
        }
        this.count = START_COUTNT;
        return this.generateSequence();
    }

    //Player Guess
    playerGuess(val: string) {
        this.player.push(val);
        if (!this.compareSequence()) {
            this.player = [];
            this.restartSequence();
        }

        this.setState();
    }
    

    compareSequence(): boolean {
        for (let i = 0; i < this.player.length; i++) {
            if(this.player[i] !== this.sequence[i]) {
                return false;
            }
        }

        if (this.player.length === this.sequence.length){
            this.updateGame();
        }
        return true;
    }

    updateGame() {
        this.appendSequence(true);
        this.player = [];
    }

    setState() {
        this.state.next({
            player: this.player,
            sequence: this.sequence,
            count: this.count
        });
    }
}
