import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Page } from 'src/app/models/page.model';

export enum gameState {
  start = 1,
  playing = 2
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  score:number = 0;
  pages:Page[] = [];
  pageIndex = 0;
  state = 0; //0-start 1-playing 
  constructor(private gameService:GameService) { }

  ngOnInit() {
  }

  StartGame(){
    this.pageIndex = 0;
    this.state = 1;
    this.score = 0;
    this.gameService.getData().subscribe(data => {
      console.log(data['results']);
      this.pages = data['results'];
    })
  }
  nextPage(score: number){
    this.score += score;
    if(this.pageIndex === this.pages.length -1) // last page
    {
      this.state = 0;
    } else {
      this.pageIndex ++;
    }
  }
}
