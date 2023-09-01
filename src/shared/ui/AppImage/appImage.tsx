import { ImgHTMLAttributes, ReactElement, useLayoutEffect, useState } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage: React.FC<AppImageProps> = (props) => {
  const { fallback, errorFallback,className, src, alt = '',...otherProps } = props;
  const [isLoading,setIsLoading] = useState(false) 
  const [hasError, setHasError] = useState(true) 

  if(isLoading && fallback){
    return fallback
  }

  if(hasError && errorFallback){
    return errorFallback
  }

  useLayoutEffect(()=>{
    const img = new Image  
    img.src = src ?? '';
    img.onload = () =>{
        setIsLoading(false) 
    img.onerror = ()=>{
        setIsLoading(false)  
        setHasError(true)
    }
    }
    
  },[src])

  return <img className={className} src={src} alt={alt} {...otherProps}>   </img>;
};
