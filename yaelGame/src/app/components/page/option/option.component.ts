import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';
import { Option } from 'src/app/models/option.model';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  @HostListener("click") onClick(){
    this.clicked.emit(this.index);
  }
  @Input() index:number;
  @Input() showResult = false;
  @Output() clicked = new EventEmitter<number>();
  private _optionInfo:Option;
  get optionInfo(){ return this._optionInfo; }
  @Input() set optionInfo(option : Option) {
    this._optionInfo = option;
  }
  constructor() { }

  ngOnInit() {
  }

  getBorder(){
    if(this.showResult){
      return this.optionInfo.selected? this.optionInfo.is_correct? 'green':'red':'grey';
    }
    return this.optionInfo.selected?'blue':'grey';
  }
}
