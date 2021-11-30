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

  ngOnInit(): void {this.getContentList();}


  addContentToList(newContentFromChild: Content): void {
    this.contentList.push(newContentFromChild);
    // We need to clone the array for the pipe to work
    this.contentList = Object.assign([], this.contentList);
  }

  getContentList(){
    this.contentService.getContentsObs().subscribe((content) => {
      this.contentList = content;
    });


  }
}
