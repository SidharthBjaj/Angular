import { Content } from '../helper-files/content-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentList: Content[] = [];
  constructor() { }

  ngOnInit(): void {
    this.contentList = [
      {
        id: 1,
        author: 'Sidharth',
        title: 'Angular Assignment 2 first title',
        body: 'This is body of content in first array',
        tags: ['Windsor','St. Clair'],
        imgUrl: 'https://images.app.goo.gl/LGndGB4ciQXgvwZm8.jpg',
        type: 'update 1'
      }, {
        id: 2,
        author: 'Sidharth',
        title: 'Angular Assignment 2 second title',
        body: 'This is body of content in second array',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg',
        tags: ['Windsor','St. Clair'],
        type: 'update 2'
      },
      {
        id: 3,
        author: 'Sidharth',
        title: 'Angular Assignment 2 third title',
        body: 'This is body of content in third array',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg',
        tags: ['Windsor','St. Clair'],
        type: 'update 3'
      },
      {
        id: 4,
        author: 'Sidharth',
        title: 'Angular Assignment 2 forth title',
        body: 'This is body of content in forth array',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg',
        tags: ['Windsor','St. Clair'],
        type: 'update 4'
      },
      {
        id: 5,
        author: 'Sidharth',
        title: 'Angular Assignment 2 fifth title',
        body: 'This is body of content in fifth array',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg',
        tags: ['Windsor','St. Clair'],
        type: 'update 5'
      },

    ];
  }

}
