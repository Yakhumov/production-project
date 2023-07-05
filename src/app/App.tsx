
import { Link } from "react-router-dom";
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProviders";
import { ClassNames } from "shared/lib/ClassNames/ClassNames";
import { AppRouter } from "./providers/ThemeProviders/router";
import Navbar from "widgets/navbar/ui/Navbar";


const App = () => {

    const {theme, ToggleTheme} = useTheme() 

  return (
    <div className={ClassNames('app',{}, [theme])}>  
      <Navbar/>
      <AppRouter/>
      <button onClick={ToggleTheme}>изменить</button>      
    </div>
  );
};

export default App;
