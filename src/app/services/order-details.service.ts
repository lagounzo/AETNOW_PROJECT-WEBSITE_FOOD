import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // foodDetails

  foodDetails = [

    {
      id:1,
      foodName: "Grille Sandwich",
      foodDetails : "Pan-fried massala paneer.",
      foodPrice : 200,
      foodImg : "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80"
      // foodImg : "https://res.cloudipary.com/swiggy/img/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },

    {
      id:2,
      foodName: "Ice cream",
      foodDetails : "Pan-fried massala paneer.",
      foodPrice : 100,
      foodImg: "https://images.unsplash.com/photo-1562790879-dfde82829db0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    {
      id:3,
      foodName: "Ice cream",
      foodDetails : "Pan-fried massala paneer.",
      foodPrice : 150,
      foodImg: "https://plus.unsplash.com/premium_photo-1678198786424-c2cc6593f59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id:4,
      foodName: "Chichen",
      foodDetails : "Pan-fried massala paneer.",
      foodPrice : 50,
      foodImg: "https://images.unsplash.com/photo-1670398564097-0762e1b30b3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      id:5,
      foodName: "Chichen",
      foodDetails : "Pan-fried massala paneer.",
      foodPrice : 50,
      foodImg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:6,
      foodName: "Pizza",
      foodDetails : "Pan-fried massala paneer.",
      foodPrice : 50,
      foodImg: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    }
  ]

}
