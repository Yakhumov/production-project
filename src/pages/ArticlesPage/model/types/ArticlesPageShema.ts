import { Article } from "entities/Article";
import { ArticleSortField, ArticleType, ArticleView } from "entities/Article/model/types/article";
import { EntityState } from "@reduxjs/toolkit";
import { SortOrder } from "shared/types";

export interface ArticlePageShema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  page: number;
  limit:number; 
  hasMore:boolean;
  order: SortOrder;
  sort: ArticleSortField;
  view: ArticleView; 
  type: ArticleType
  search: string
  _inited:boolean
}
