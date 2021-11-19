import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'learning-angular';
  _booksList: Content[] | any;


  public constructor(){
  }

  ngOnInit(): void {

  }

  public findBooks(): void {
    console.log("Here is the list of books: ");

    this._booksList.push({
      id: 0,
      title: "book",
      author: "author",
      body: "a book",
      showOnList: true
    })
    this._booksList = [...this._booksList];
    console.log(this._booksList);
  }

}
