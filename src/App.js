import React from "react";
import './styles/App.scss';
import Header from "./components/Header";
import MainContentBlock from "./components/MainContentBlock";
import Footer from "./components/Footer";

function App() {

  return (
      <>
        <Header key="0" />
        <MainContentBlock key="1"/>
        <Footer key="2"/>
      </>
  );
}

export default App;
