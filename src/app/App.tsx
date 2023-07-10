
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames"; 
import { AppRouter } from "./providers/ThemeProviders/router";
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Navbar/Sidebar';



const App = () => {

    const {theme} = useTheme() 

  return (
    <div className={classNames('app',{}, [theme])}>  
      <Navbar/>
      <div className='content-page'>
        <Sidebar/>
      <AppRouter/> 
      </div>
    </div>
  );
};

export default App; 
