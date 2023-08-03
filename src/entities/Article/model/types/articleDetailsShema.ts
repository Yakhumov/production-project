import { Article } from "./article";


export interface ArticlesDetailsShema {
    isLoading: boolean;
    error?: string;
    data?: Article
      
}           
