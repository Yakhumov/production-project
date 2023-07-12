
import { render } from "react-dom";
import  App  from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProviders";
import  "shared/config/RouterConfig/i18n/i18";
import { ErrorBoundary } from "app/providers/ThemeProviders/ErrorBoundary";

render(
    <BrowserRouter>
    <ErrorBoundary>
    <ThemeProvider>
    <App/>
    </ThemeProvider> 
    </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')    
)
