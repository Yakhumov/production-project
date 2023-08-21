import { rtkApi } from 'shared/api/RtkApi';

const recomendationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecomendationList: build.query({
          query: (limit) => ({
            url: '/articles',
            params:{
                _limit: limit 
            }
          }),
        }),
      }),  
})

 export const userArticleRecommendationsList = recomendationApi.useGetRecomendationListQuery