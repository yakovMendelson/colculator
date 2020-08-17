import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fate',
  templateUrl: './fate.component.html',
  styleUrls: ['./fate.component.css']
})
export class FateComponent implements OnInit {
  right: number
  left: number
  flag: boolean = false;
  side: string
  constructor() { }

  ngOnInit(): void {
  }
  start() {
    this.flag = false
    this.right = Math.floor(Math.random() * 10);
    this.left = Math.floor(Math.random() * 10);
    if (this.right > this.left)
      this.side = 'right';
    else
      this.side = 'left';



  }
  test(side: string) {
    this.flag=true;
    if (this.side == side)
    setTimeout(() => {
      alert('זכית')
    }, 500);
      

  }

}
