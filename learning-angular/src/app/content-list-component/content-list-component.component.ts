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
      title: "Thus spoke Zarathustra",
      author: "Freidrich Nietzsche",
      body: "a book about a man named zarathustra and his phiolosophically important adventures"
    },

    {
      id: 3,
      title: "Thus spoke Zarathustra",
      author: "Freidrich Nietzsche",
      body: "a book about a man named zarathustra and his phiolosophically important adventures"
    },

    {
      id: 4,
      title: "Thus spoke Zarathustra",
      author: "Freidrich Nietzsche",
      body: "a book about a man named zarathustra and his phiolosophically important adventures"
    }]
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
