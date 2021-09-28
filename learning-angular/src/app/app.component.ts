import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: '/content-list-component/content-list-component.component.html',
  styleUrls: ['../src/styles.css','./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'learning-angular';

  constructor(){
    
  }

  ngOnInit(): void {

  }
  
}
