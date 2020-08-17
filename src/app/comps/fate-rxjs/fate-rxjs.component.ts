import { Component, OnInit } from '@angular/core';
import { of, Observable, concat, merge, from, fromEvent } from 'rxjs';
import {throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-fate-rxjs',
  templateUrl: './fate-rxjs.component.html',
  styleUrls: ['./fate-rxjs.component.css']
})
export class FateRxjsComponent implements OnInit {
  $right:Observable<number>
  $left: Observable<number>
  right:string
  left:string
  flag: boolean = false;
  side: string
  start
  r
  l
  constructor() { }

  ngOnInit(): void {
    this.start=document.querySelector('#start');
    this.r=document.querySelector('#right');
    this.l=document.querySelector('#left');
    fromEvent(this.start,'click').pipe(throttleTime(3000)).subscribe(()=>{
      this.starter()
    })
    fromEvent(this.r,'click').pipe(throttleTime(3000)).subscribe((ev)=>{
      this.test(ev['target']['id'])
    })
    fromEvent(this.l,'click').pipe(throttleTime(3000)).subscribe((ev)=>{
      this.test(ev['target']['id'])
    })
  }

  
  starter() {
    this.flag = false
    this.$right =of(Math.floor(Math.random() * 10));
    this.$left =of(Math.floor(Math.random() * 10));
    this.$right.subscribe(side=>{
      this.right=String(side);
    })
    this.$left.subscribe(side=>{
      this.left=String(side);
      
        if(this.left>this.right)
          this.side='left';
          else this.side='right'
     
    })
  }
  test(side: string) {
    this.flag=true;
    if (this.side == side)
    setTimeout(() => {
      alert('זכית')
    }, 500);
      

  }

}

