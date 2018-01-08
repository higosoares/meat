import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  @Output() rated = new EventEmitter<number>()
  rates : number[] = [1,2,3,4,5]
  rate: number = 0

  previouesRate: number

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number){
    this.rate = r
    this.previouesRate = undefined
    this.rated.emit(this.rate)
  }
  setTemporaryRate(r: number){
    if(this.previouesRate == undefined){
      this.previouesRate = this.rate
    }
    this.rate = r
  }
  clearTemporaryRate(){
    if(this.previouesRate != undefined){
      this.rate = this.previouesRate
      this.previouesRate = undefined
    }
  }

}
