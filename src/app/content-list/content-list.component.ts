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

  searchTitle(search:String):void{
    let exist = this.contentList.find(content => content.title.toLowerCase() == search.toLowerCase());
    alert(exist ? `${search} exist!` : `${search} does not exist!`);
  }

  addInfoToList(newInfoFromChild: Content): void{
    this.contentList.push(newInfoFromChild);
    console.log("PUSHED " + this.contentList.length);
    console.log("PUSHED " + newInfoFromChild.title);
    // We need to clone the array for the pipe to work
    this.contentList = Object.assign([], this.contentList);
  }

  ngOnInit(): void {
    this.contentList = [
      {
        id: 1,
        author: 'Sidharth',
        title: 'first',
        body: 'This is body of content in first array',
        tags: ['Windsor','St. Clair'],
        imgUrl: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg',
        type: 'school'
      }, {
        id: 2,
        author: 'Sidharth',
        title: 'second',
        body: 'This is body of content in second array',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg',
        tags: ['Windsor','St. Clair'],
        type: 'windsor'
      },
      {
        id: 3,
        author: 'Sidharth',
        title: 'third',
        body: 'This is body of content in third array',
        // imgUrl: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg',
        tags: ['Windsor','St. Clair'],
        type: 'windsor'
      },
      {
        id: 4,
        author: 'Sidharth',
        title: 'fourth',
        body: 'This is body of content in forth array',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg',
        tags: ['Windsor','St. Clair'],
        type: 'windsor'
      },
      {
        id: 5,
        author: 'Sidharth',
        title: 'fifth',
        body: 'This is body of content in fifth array',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg',
        tags: ['Windsor','St. Clair'],
        type: 'school'
      },

    ];
  }

}
