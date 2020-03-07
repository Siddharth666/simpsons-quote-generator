import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-quotes-app';

  constructor() { }
   simp_character: string;
   simp_quotes: string;
   simp_image: string;

  ngOnInit() {
    //alert("Hello Sidd")
    //this.someFunction();
  }

  someFunction() {
     axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then((response)=> {
      this.simp_character = response.data[0].character;
      this.simp_quotes = response.data[0].quote;
      this.simp_image = response.data[0].image;
    })
    .catch((error)=> {
      console.log(error)
    })
  }
//https://thesimpsonsquoteapi.glitch.me/

clickEvent() {
  this.someFunction();
}

}
