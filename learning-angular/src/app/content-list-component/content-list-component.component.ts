import { Content } from '../helper-files/content-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list-component',
  templateUrl: './content-list-component.component.html',
  styleUrls: ['./content-list-component.component.scss']
})
export class ContentListComponentComponent implements OnInit {
  message: string | any;
  musicList = [{
    id: 0,
    author: 'Dragonforce',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Through_the_Fire_and_Flames_Cover_Art.jpg',
    type: 'power metal',
    title: 'Through The Fire And The Flames',
    body: 'A legendary song with too many solos',
    tags: ['gh3', 'double solos', 'epic']
  }, {
    id: 1,
    author: 'Metallica',
    type: 'metal',
    title: 'Enter the Sandman',
    body: 'This one was really hard on drums on rock band',
  }, {
    id: 2,
    author: 'Ed Sheeran',
    title: 'Perfect',
    type: "Pop",
    body: 'Actually really talented',
    tags: ['relationship goals']
  }, {
    id: 3,
    author: 'Quavo',
    imgUrl: 'https://m.media-amazon.com/images/I/41XIjHKHNbL._AC_.jpg',
    type: 'Hip-Hop',
    title: 'Bubble Gum',
    body: 'It brings tears to your eyes',
  }, {
    id: 4,
    author: 'Jim Croce',
    title: 'Time in a bottle',
    body: 'The song from days of future past',
    tags: ['quicksilver', 'wandasbrother']
  }, {
    id: 5,
    author: 'Avenged Sevenfold',
    type: 'metal',
    title: 'Almost easy',
    body: 'An oldie but a goodie',
  }, {
    id: 6,
    author: 'Nightwish',
    type: 'power metal',
    title: 'Nemo',
    body: 'This is not a power metal song, but that is ok',
  }];

  ngOnInit(): void {
  }

  findTitle(title: string): any{
    let filter = this.musicList.filter(song => song.title === title);
    if (filter.length > 0) {
      this.message = "Song found";
    }
    else {
      this.message = "No song found with that title";
    }
    console.log("spread operator", ...this.musicList);
    console.log("Just the array", this.musicList);
    this.musicList = [...this.musicList];
    }

  pushContent($event: any) {

  }
}


