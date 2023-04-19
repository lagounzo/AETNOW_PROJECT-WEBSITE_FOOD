import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit{

  constructor(private param : ActivatedRoute , private service : OrderDetailsService){}

  getMenuId : any;
  menuData : any;

  ngOnInit(): void {

    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');

    if(this.getMenuId)
    {
      this.menuData = this.service.foodDetails.filter((value)=>{
        return value.id == this.getMenuId;

      }) //ou l'instruction suivante

      // this.service.foodDetails.filter((value)=>{
      //   if(value.id==this.getMenuId)

      //   {return this.getMenuId

      //   }
      // })
    }


  }

}
