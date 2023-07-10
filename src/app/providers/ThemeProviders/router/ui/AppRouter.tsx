import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouterConfig } from 'shared/config/RouterConfig/routerConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(RouterConfig).map(({ element,path}) => (
          <Route key={path} path={path} element={element
          } />
          ))}
      </Routes>
      <div className='page-wrapper'>   
            </div> 
    </Suspense>
  );
};

export default AppRouter;          
