import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsShema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
