import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-slide',
  templateUrl: './hotel-slide.component.html',
  styleUrls: ['./hotel-slide.component.scss']
})
export class HotelSlideComponent implements OnInit {
  @Input() title!: string;

  items = [
    {
      "_id": 1,
      "avis": 5,
      "wifi": true,
      "parking": true,
      "description": "Ankasy Lodge est l’un des secrets les mieux gardés de Madagascar, un paradis sans artifices, où luxe naturel et charme exotique se conjuguent pour le plus grand plaisir des sens. Situé à 80 km au nord de Tuléar, sur la côte du Tropique du Capricorne, au bord du magnifique lagon d’Ambatomilo, Ankasy Lodge propose neuf bungalows spacieux de grand confort et un restaurant d’un charme fou, au creux d’une plage de sable blanc d’1,3 km de long. Un site d’une beauté à couper le souffle. Une découverte exceptionnelle qui marquera votre séjour à Madagascar !",
      "nom": "Ankasy lodge",
      "adresse": "Toliary",
      "img": "assets/img/ankasy.jpg"
    },
    {
      "_id": 1,
      "avis": 5,
      "wifi": true,
      "parking": true,
      "description": "Ankasy Lodge est l’un des secrets les mieux gardés de Madagascar, un paradis sans artifices, où luxe naturel et charme exotique se conjuguent pour le plus grand plaisir des sens. Situé à 80 km au nord de Tuléar, sur la côte du Tropique du Capricorne, au bord du magnifique lagon d’Ambatomilo, Ankasy Lodge propose neuf bungalows spacieux de grand confort et un restaurant d’un charme fou, au creux d’une plage de sable blanc d’1,3 km de long. Un site d’une beauté à couper le souffle. Une découverte exceptionnelle qui marquera votre séjour à Madagascar !",
      "nom": "Ankasy lodge",
      "adresse": "Toliary",
      "img": "assets/img/ankasy.jpg"
    },
    {
      "_id": 1,
      "avis": 5,
      "wifi": true,
      "parking": true,
      "description": "Ankasy Lodge est l’un des secrets les mieux gardés de Madagascar, un paradis sans artifices, où luxe naturel et charme exotique se conjuguent pour le plus grand plaisir des sens. Situé à 80 km au nord de Tuléar, sur la côte du Tropique du Capricorne, au bord du magnifique lagon d’Ambatomilo, Ankasy Lodge propose neuf bungalows spacieux de grand confort et un restaurant d’un charme fou, au creux d’une plage de sable blanc d’1,3 km de long. Un site d’une beauté à couper le souffle. Une découverte exceptionnelle qui marquera votre séjour à Madagascar !",
      "nom": "Ankasy lodge",
      "adresse": "Toliary",
      "img": "assets/img/ankasy.jpg"
    },
    {
      "_id": 1,
      "avis": 5,
      "wifi": true,
      "parking": true,
      "description": "Ankasy Lodge est l’un des secrets les mieux gardés de Madagascar, un paradis sans artifices, où luxe naturel et charme exotique se conjuguent pour le plus grand plaisir des sens. Situé à 80 km au nord de Tuléar, sur la côte du Tropique du Capricorne, au bord du magnifique lagon d’Ambatomilo, Ankasy Lodge propose neuf bungalows spacieux de grand confort et un restaurant d’un charme fou, au creux d’une plage de sable blanc d’1,3 km de long. Un site d’une beauté à couper le souffle. Une découverte exceptionnelle qui marquera votre séjour à Madagascar !",
      "nom": "Ankasy lodge",
      "adresse": "Toliary",
      "img": "assets/img/ankasy.jpg"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
