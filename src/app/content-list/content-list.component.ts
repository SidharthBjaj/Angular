import { Content } from '../helper-files/content-interface';
import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentList: Content[] = [];
  constructor(private contentService: ContentService) { }

  searchTitle(search:String):void{
    let exist = this.contentList.find(content => content.title.toLowerCase() == search.toLowerCase());
    alert(exist ? `${search} exist!` : `${search} does not exist!`);
  }

  ngOnInit(): void {
    this.contentService.getContentsObs().subscribe((content) => {
      this.contentList = content;
    });
  }
}
