import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent implements OnInit {
  @Input() name!:string;
  @Input() description!:string;
  @Input() img!:string;
  @Input() _id!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
