// @ts-ignore
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Content} from "../helper-files/content-interface";

// @ts-ignore
@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() addContentEvent = new EventEmitter<Content>();
  message: string | undefined;
  id: any;
  author: any;
  imgUrl: any;
  type: any;
  title: any;
  body: any;
  tags: any;

  constructor() { }

  ngOnInit(): void {
  }

  public pushContentPromise() {
    let addContentPromise = new Promise((successFunction, failFunction) => {
      if (this.id && this.author && this.title && this.body) {
        this.addContentEvent.emit({
          id: this.id,
          author: this.author,
          imgUrl: this.imgUrl,
          type: this.type,
          title: this.title,
          body: this.body,
          tags: this.tags.split(',')
        })
        successFunction("Content successfully added");
      }
      else {
        failFunction("500");
      }
    });

    addContentPromise.then((msg) => {
      console.log(msg);
      this.message = "";
    }).catch((msg) => {
      this.message = "Can't add the content without all the required fields set: Error code " + msg;
    });
  }


}
