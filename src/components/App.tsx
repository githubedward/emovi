import React from "react";
import GlobalStyles from "./shared-styles/styles.global";
import Header from "./Header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
    </div>
  );
};

export default App;
