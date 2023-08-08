
import { ArticlesDetailsSchema } from "./model/types/articleDetailsShema";
import { Article } from "./model/types/article";
import {ArticleDetails} from "./ui/ArticleDetails/ArticleDetails";
import { articleDetailsReducer } from "./model/slice/articleDetailsSlice";
import { getArticleDetailsData } from "./model/selectors/ArticleDetails";
import { getArticleDetailsIsLoading } from "./model/selectors/ArticleDetails";
import { getArticleDetailsError } from "./model/selectors/ArticleDetails";
import { ArticleListItem } from "./ui/ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "./ui/ArticleListItem/ArticleListItemSkeleton";
import { ArticleViewSelector } from "./ui/ArticleViewSelector/ArticleViewSelector";

export {
  ArticlesDetailsSchema,
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  articleDetailsReducer,
  ArticleViewSelector,
  Article,
  ArticleListItem,
  ArticleDetails,
};
