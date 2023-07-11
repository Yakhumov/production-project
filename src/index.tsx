
import { render } from "react-dom";
import  App  from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProviders";
import  "shared/config/RouterConfig/i18n/i18";

render(
    <BrowserRouter>
    <ThemeProvider>
    <App/>
    </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')    
)
