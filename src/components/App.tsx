import React from "react";
import GlobalStyles from "./shared-styles/styles.global";
import Header from "./Header/Header";
import Store from "./MovieStore/Store";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Store />
    </div>
  );
};

export default App;
