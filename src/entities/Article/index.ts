
import { ArticlesDetailsSchema } from "./model/types/articleDetailsShema";
import { Article } from "./model/types/article";
import {ArticleDetails} from "./ui/ArticleDetails/ArticleDetails";
import { articleDetailsReducer } from "./model/slice/articleDetailsSlice";

export {
  ArticlesDetailsSchema,
  articleDetailsReducer,
  Article,
  ArticleDetails,
};
