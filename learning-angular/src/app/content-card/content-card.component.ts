import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  constructor() { 

    let newContent: Content;
    
    newContent = {
      id: 0,
      author: 'Freidrich Nietzsche ',
      imgUrl: 'https://images.penguinrandomhouse.com/cover/9780140441185',
      type: 'Philosophy',
      title: 'Thus Spoke Zarathustra',
      body: 'a book about philosophy',
      tags: ['deep','got me in my feels ']
    }

    // this.addBooks(newContent);

    newContent = {
      id: 1,
      author: 'Various',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/31ttY3wnePL.jpg',
      type: 'Culture',
      title: 'Kanun',
      body: 'a book about albanian sociological stuff',
      tags: ['sociology','albania']
    }

    // this.bookList.addBooks(newContent);

    newContent = {
      id: 2,
      author: 'DK',
      imgUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429241838l/2858538.jpg',
      type: 'World',
      title: 'EYEWITNESS: EARTH',
      body: 'a book about the earth, for kids ',
      tags: ['world','stuff']
    }

    // this.bookList.addBooks(newContent);
    
  }

  ngOnInit(): void {
  }

}
