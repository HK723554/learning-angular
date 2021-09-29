import { Content } from '../helper-files/content-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list-component',
  templateUrl: './content-list-component.component.html',
  styleUrls: ['./content-list-component.component.css']
})
export class ContentListComponentComponent implements OnInit {

  _booksList: Content[];
  constructor() {

    this._booksList = [{
      id: 0,
      title: "Thus spoke Zarathustra",
      author: "Freidrich Nietzsche",
      body: "a book about a man named zarathustra and his philosophically important adventures"
    },

    {
      id: 1,
      title: "Kanun",
      author: "Various",
      body: "a book about the sociological code of the albanian people"
    },

    {
      id: 2,
      title: "Eyewitness: Earth",
      author: "DK",
      body: "a book about the earth for kids"
    },

    {
      id: 3,
      title: "yes",
      author: "yes",
      body: "a book "
    },

    {
      id: 4,
      title: "q",
      author: "a",
      body: "a book lol"
    }]
    
  }
  ngOnInit(): void {
  }



}
