import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Page } from 'src/app/models/page.model';
import { Option } from 'src/app/models/option.model';

export enum PageState {
  init = 1,
  selected = 2,
  result = 3
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {
  get pageState() { return PageState; }
  public state:PageState;
  public options:Option[];
  
  @Input() pageIndex = 0;
  private _pageInfo: Page;
  get pageInfo(){ return this._pageInfo; }
  @Input() set pageInfo(page :Page){
    if(page){
      this._pageInfo = page;
      this.state = PageState.init;
      this.initOptions();     
    }
  }
  @Output() onNext = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  initOptions(){
    const rand:number = Math.floor(Math.random() * 4);
    let ind = 0;
    let opt = [];
    
    for (let i = 0 ; i < 4; i++){
      if(i === rand){
        opt.push({text:this.pageInfo.correct_answer, is_correct:true})
      } else {
        opt.push({text:this.pageInfo.incorrect_answers[ind], is_correct:false})
        ind++;
      }
    } 
    this.options = opt;
  }
  onContinue(){
    let score = this.options.some(o => o.selected && o.is_correct)? 1:0;
    this.onNext.emit(score);
  }
  onOk(){
    this.state = PageState.result;
  }
  
  optionClicked(optionInd :number){
    if(this.state !== PageState.init){return};
    // mark selected option as selected, mark the others as not selected
    this.options.map((o,index) => o.selected = (index === optionInd) ? true:false);
    this.state = PageState.selected;
  }
}
