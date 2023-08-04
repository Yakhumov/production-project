import { Article } from "./article"; 
export interface ArticlesDetailsSchema {
    data?: Article
    error?: string;
    isLoading: boolean;
      
}           
