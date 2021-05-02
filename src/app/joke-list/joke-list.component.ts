import { Component, OnInit } from '@angular/core';
import { Joke } from '../models/joke';


@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.less']
})
export class JokeListComponent implements OnInit {
  jokes!: Array<Joke>;
  isHidden: boolean;

  constructor() {
    this.isHidden = true;
    this.jokes = [
      new Joke('What did the cheese to the mirror?','hello there!!',true),
      new Joke('What do you tell yourself!!','Say Cheese!!!',false)
    ]
   }

  toggle(joke:any){
    joke.hide = !joke.hide;
  }


  getData(data:string,data2:string){
    console.log(data,data2);
  }

  ngOnInit(): void {
  }

}
