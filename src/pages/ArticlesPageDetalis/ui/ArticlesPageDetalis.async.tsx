import { lazy } from 'react';

export const ArticlesPageDetalisAsync = lazy(() =>  new Promise(resolve => {
    //@ts-ignore
    setTimeout(()=> resolve(import('./ArticlesPageDetalis')), 1500  )  
}))

