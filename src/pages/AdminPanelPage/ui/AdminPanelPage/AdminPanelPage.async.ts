import { lazy } from 'react';

export const AdminPanelPageAsync = lazy(() =>  new Promise(resolve => {
    //@ts-ignore
    setTimeout(()=> resolve(import('./AdminPanelPage')), 1500  )  
}))

