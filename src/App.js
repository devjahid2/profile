import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import { createContext, useState } from "react";

export const AppContext = createContext({});

function App() {
  const [context,setContext] = useState({
    leftMenuOpen:false
  })
  
  return (
    <AppContext.Provider value={[context,setContext]}>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
