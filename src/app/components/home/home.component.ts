import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SharedPlayerService } from '../../services/shared-player.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    playerName: any;

    constructor(public router:Router,public sharedService:SharedPlayerService) { }

    ngOnInit(): void {
    }

    go(playerName: any) {
        //return this.playerName;
        this.playerName=playerName
        console.log("playerName: ",playerName);
        console.log("this.playerName: ",this.playerName);
        this.sharedService.setPlayerName(this.playerName);
        this.router.navigate(['/game']); // navigate to other page
    }

}
