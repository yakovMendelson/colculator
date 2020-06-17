import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor() { }

  arr:string[]=[]
  history:string[][]=[]
}
