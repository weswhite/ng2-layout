import {Component} from '@angular/core'

class Article{
  prop: string;

  constructor(prop: string){
    this.prop = prop;
  }
}

@Component{}
export class ArticleComponent{
  article: Article;

  constructor(){

  }
}
