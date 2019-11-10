import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Page } from 'src/app/models/page.model';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

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
  @ViewChild('carousel', {static : false}) carousel: NgbCarousel;
  
  score:number = 0;
  pages:Page[] = [];
  pageIndex = 0;
  state = 0; //0-start 1-playing 
  constructor(private gameService:GameService) { }

  ngOnInit() {
  }

  StartGame(){
    this.pageIndex = 0;
    this.score = 0;
    this.gameService.getData().subscribe(data => {
      console.log(data['results']);
      this.pages = data['results'];
      this.state = 1;
    })
  }
  nextPage(page:{score:number, ind:number}){
    this.score +=page.score;
    this.carousel.next();
    this.carousel.pause();
    if(page.ind === this.pages.length -1) // last page
    {
      this.state = 0;
    }
  }
}
