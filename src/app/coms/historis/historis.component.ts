import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-historis',
  templateUrl: './historis.component.html',
  styleUrls: ['./historis.component.css']
})
export class HistorisComponent implements OnInit {

  constructor(public serv:ServService) { }

  ngOnInit(): void {
  }

}

