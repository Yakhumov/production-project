import { Routes, Route } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import './styles/index.scss'
import { useTheme } from "./theme/useTheme";  
import { ClassNames } from "./helpers/ClassNames/ClassNames";

const App = () => {

    const {theme, ToggleTheme} = useTheme() 

  return (
    <div className={ClassNames('app',{}, [theme])}>  
      <button onClick={ToggleTheme}>изменить</button>      
      <Link to="/">Главная</Link>
      <Link to="/about">  О сайте</Link>   
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="about" element={<AboutPageAsync />} /> 
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
