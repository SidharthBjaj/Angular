import { Content } from './../helper-files/content-interface'

export class ContentList{
  private contents: Content[] = [];
  get content(): Content[]{
    return this.contents;
  }
  // add function
  addContent(content: Content): void{
    this.contents.push(content);
  }
  // number of items
  length(): number{
    return this.contents.length;
  }

  //show data
  showContent(index: number): string {
    const contents = this.contents[index];
    if (contents == null){
      return `<h2 class="error"> Empty! No content at ${index}.</h2>`
    }
    return `<h1>Title: ${contents.title}</h1><h3>Author: ${contents.author}</h3><p>${contents.body}</p>`
  }
}
