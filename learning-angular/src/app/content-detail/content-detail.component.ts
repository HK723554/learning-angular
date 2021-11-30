import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NotFoundComponent} from "../not-found/not-found.component";
import {ContentListComponentComponent} from "../content-list-component/content-list-component.component";
@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {


  constructor() {

    RouterModule.forRoot([
      { path: 'content/:id', component: ContentDetailComponent },
      { path: 'content', component: ContentListComponentComponent },
      { path: '**', component: NotFoundComponent }
    ])

  }

  ngOnInit(): void {
  }



}
