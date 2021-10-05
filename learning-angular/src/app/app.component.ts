import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'learning-angular';
  public check: any;
  

  public constructor(){
    this.check = 'Books';
  }

  ngOnInit(): void {

  }

  public findBooks(): void {
    console.log("show dots value", this.check);
    this.check = "Changed cause of the button";

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
