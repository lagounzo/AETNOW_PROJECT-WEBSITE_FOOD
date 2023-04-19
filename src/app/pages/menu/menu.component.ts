import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // appel du service dans le construceur cote menu  
  constructor(private service : OrderDetailsService){}

  foodData : any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;

  }

}
