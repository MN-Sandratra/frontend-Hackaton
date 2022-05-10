import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  @Input() nom! : string;
  @Input() description! : string;
  @Input() adresse! : string;
  @Input() img! : string;
  @Input() parking! : boolean;
  @Input() wifi! : boolean;
  @Input() avis! : number;
  shortedDescription : string = "";
  avisIterator! : Array<any>;
  faStar = faStar;

  private shortenDescription() : void {
    var trimmedString = this.description.substr(0, 250);
    this.shortedDescription = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))).concat(..." ...")
  }

  constructor() { }

  ngOnInit(): void {
    this.shortenDescription();
    this.avisIterator = [...Array(this.avis).keys()]
  }

}
