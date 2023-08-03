import { useTheme } from "./providers/ThemeProviders";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/ThemeProviders/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";
import { StoreProvider } from "./providers/ThemeProviders/StoreProvider";


const App = () => {
  const { theme } = useTheme();
 

  return (
    <StoreProvider> 
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader/>}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
           <AppRouter />
        </div>
      </Suspense>
    </div>
    </StoreProvider>
  );
};

export default App;
