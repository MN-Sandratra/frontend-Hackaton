import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/services/province.service';

@Component({
  selector: 'app-province-slide',
  templateUrl: './province-slide.component.html',
  styleUrls: ['./province-slide.component.scss']
})
export class ProvinceSlideComponent implements OnInit {
  items = [1,2,3]
  provinces:any;
  constructor(private provinceService : ProvinceService) { }

  ngOnInit(): void {
    this.provinceService.getProvinces().subscribe((results) => {
      this.provinces = results;
    });
  }
}
