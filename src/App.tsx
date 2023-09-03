import React from "react";
import Header from "./Component/Header";
import { GlobalStyle } from "./GlobalStyles";
import { Landingpage } from "./Component/Landing";
import { Foot } from "./Component/Foot";


 const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
   <Landingpage />
   <Foot />

  </>
);

export default App
