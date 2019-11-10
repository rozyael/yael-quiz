import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';
import { Option } from 'src/app/models/option.model';
//import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon(
  //     'check',
  //     sanitizer.bypassSecurityTrustResourceUrl('./assets/img/check.svg'));
  // }
  
  constructor(){}

  ngOnInit() {
  }

  getBorder(){
    if(this.showResult){
      return this.optionInfo.selected? this.optionInfo.is_correct? 'green':'red':'grey';
    }
    return this.optionInfo.selected?'blue':'grey';
  }
}
