import { rtkApi } from "shared/api/RtkApi";
import { Rating } from "entities/Rating/model/types/rating";

export interface getArticleRatingProps {
  userId: string;
  articleId: string;
}

export interface getArticleRateProps{
    userId: string;
    articleId: string;
    rate: number,
    feedback?: string 
}

const ArticleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], getArticleRatingProps>({
      query: ({userId , articleId}) => ({ 
        url: "/article-ratings",
        params: {
          userId, 
          articleId, 
        },
      }),
    }),
  }),
});

const ArticleRateApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
      getArticleRate: build.mutation<void , getArticleRateProps>({
        query: (args) => ({  
          url: "/article-ratings",
          method: 'POST',
          body: args
        }),
      }),
    }),
  });

export const useArticleRating = ArticleRatingApi.useGetArticleRatingQuery;
export const useArticleRate  = ArticleRateApi.useGetArticleRateMutation
