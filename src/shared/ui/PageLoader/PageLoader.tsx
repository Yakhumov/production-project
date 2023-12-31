import { classNames } from "../../lib/classNames/classNames";
import { Loader } from "../Loaders/Loader";
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC  <PageLoaderProps> = ({className}) =>{
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
          <Loader/>
    </div>

  )
}  
