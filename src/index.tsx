import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProviders";
import "shared/config/i18n/i18";
import { ErrorBoundary } from "./app/providers/ThemeProviders/ErrorBoundary";
import "app/styles/index.scss";
import { StoreProvider } from "app/providers/ThemeProviders/StoreProvider";

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
