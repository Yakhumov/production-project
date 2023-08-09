import { Article } from "entities/Article";
import { ArticleView } from "entities/Article/model/types/article";
import { EntityState } from "@reduxjs/toolkit";

export interface ArticlePageShema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  page: number;
  limit?:number; 
  hasMore:boolean

  view: ArticleView; 
  _inited:boolean
}
