
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames"; 
import { AppRouter } from "./providers/ThemeProviders/router";
import { Navbar } from "widgets/navbar";


const App = () => {

    const {theme, ToggleTheme} = useTheme() 

  return (
    <div className={classNames('app',{}, [theme])}>  
      <Navbar/>
      <AppRouter/>
      <button onClick={ToggleTheme}>изменить</button>      
    </div>
  );
};

export default App; 
