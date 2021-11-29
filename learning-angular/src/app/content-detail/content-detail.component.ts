import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NotFoundComponent} from "../not-found/not-found.component";
@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  private ContentListComponent: NotFoundComponent | ContentDetailComponent | Type<any>;

  constructor() {

    RouterModule.forRoot([
      { path: 'content/:id', component: ContentDetailComponent },
      { path: 'content', component: this.ContentListComponent },
      { path: '**', component: NotFoundComponent }
    ])
    
  }

  ngOnInit(): void {
  }
  
  

}
