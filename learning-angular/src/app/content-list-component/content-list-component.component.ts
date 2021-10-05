import { Content } from '../helper-files/content-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list-component',
  templateUrl: './content-list-component.component.html',
  styleUrls: ['./content-list-component.component.scss']
})
export class ContentListComponentComponent implements OnInit {

  _booksList: Content[];
  public check: any;
  constructor() {

    this._booksList = [{
      id: 0,
      title: "Thus spoke Zarathustra",
      author: "Freidrich Nietzsche",
      body: "a book about a man named zarathustra and his philosophically important adventures",
      showOnList: true
    },

    {
      id: 1,
      title: "Kanun",
      author: "Various",
      body: "a book about the sociological code of the albanian people",
      showOnList: true
    },

    {
      id: 2,
      title: "Eyewitness: Earth",
      author: "DK",
      body: "a book about the earth for kids",
      showOnList: false
    },

    {
      id: 3,
      title: "yes",
      author: "yes",
      body: "a book ",
      showOnList: false
    },

    {
      id: 4,
      title: "q",
      author: "a",
      body: "a book lol",
      showOnList: true
    }]
    
  }
  ngOnInit(): void {
  }

 
}


