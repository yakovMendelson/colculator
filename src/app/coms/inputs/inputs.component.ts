import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  constructor(private serv:ServService) {}
  num1:string
  resultA:string =''
  resultB:string =''
  temp:string
  his:string
  @ViewChild('myInput') myInpu : ElementRef
  col(oper):void{
      this.myInpu.nativeElement.value=this.temp+oper
   }
    inp(num){
      this.temp=num.value;
      let n=parseInt(num.value[this.temp.length-1]);
      
      if(n)
      this.resultA=eval(num.value);
      this.resultB=num.value;
      this.his=this.resultB+'='+this.resultA
    }
    history(){
      if(this.serv.arr.length>0){
      this.serv.history.push(this.serv.arr) 
      this.serv.arr=[]
      }
    
      
    }
    equal(){
      this.serv.arr.push(this.his)
      this.myInpu.nativeElement.value=''
    }
  ngOnInit(): void {
  }
}