import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/services/province.service';

@Component({
  selector: 'app-province-slide',
  templateUrl: './province-slide.component.html',
  styleUrls: ['./province-slide.component.scss']
})
export class ProvinceSlideComponent implements OnInit {
  items = [
    {
    "_id": 1,
    "libellé": "ANTANANARIVO",
    "img": "assets/img/provinces/antananarivo.png",
    "description": "La Province d'Antananarivo était l'une des six provinces de Madagascar, centrée autour de la capitale, Antananarivo qui est aussi la capitale du pays. Elle a une superficie de 58 283 km2 et une population de 5 932 607 personnes."
  },
  {
    "_id": 2,
    "libellé": "FIANARANTSOA",
    "img": "assets/img/provinces/fianarantsoa.png",
    "description": "Fianarantsoa était l'une des six provinces de Madagascar avec une superficie de 103 272 km2. En 2011, elle avait une population de 4 142 444 habitants. Sa capitale est Fianarantsoa."
  },
  {
    "_id": 3,
    "libellé": "TOAMASINA",
    "img": "assets/img/provinces/toamasina.png",
    "description": "La province de Tamatave était l'une des six provinces de Madagascar avec une superficie de 71 911 km2. En 2011, elle avait une population de 3 438 275 habitants. Son chef-lieu éponyme Tamatave, en malgache : Toamasina."
  },
  {
    "_id": 4,
    "libellé": "MAHAJANGA",
    "img": "assets/img/provinces/mahajanga.png",
    "description": "La province de Mahajanga ou province de Majunga était l'une des six provinces de Madagascar, avec une superficie de 150 023 km2. En 2011, elle avait une population de 2 224 570 habitants. Sa capitale est Mahajanga (ou Majunga)."
  },
  {
    "_id": 5,
    "libellé": "TOLIARY",
    "img": "assets/img/provinces/toliary.png",
    "description": "La province de Toliara - ou province de Tuléar (ou de Tolozy dans la langue courante locale) était l'une des six anciennes provinces de Madagascar, la plus vaste avec une superficie de 161 405 km². Elle a une population de 2 229 550 habitants (juillet 2001). Sa capitale est Toliara 1. La dénomination de « province » est appelée à disparaître au moins sur le plan politique et administratif, à la suite de la dernière réforme constitutionnelle d'avril 2007 qui consacre les régions."
  },
  {
    "_id": 6,
    "libellé": "ANTSIRANANA",
    "img": "assets/img/provinces/antsiranana.png",
    "description": "Antsiranana, ou Diego Suarez, était l'une des six provinces de Madagascar. Elle a une superficie de 43 406 km2 et une population de 1 465 606 habitants (2011). Sa capitale est Antsiranana."
    }
  ]
  provinces:any;

  constructor(private provinceService : ProvinceService) { }

  ngOnInit(): void {
    // this.provinceService.getProvinces().subscribe((results) => {
    //   this.provinces = results;
    // });
  }
}
