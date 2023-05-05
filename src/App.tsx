import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AboutMe from "./components/AboutMe/AboutMe";
import NewsLine from "./components/NewsLine/NewsLine";
import ContentForParents from "./components/ContentForParents/ContentForParents";
import DevelopingEnvironment from "./components/DevelopingEnvironment/DevelopingEnvironment";

function App() {

    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header/>
        <Main/>
        <AboutMe/>
        <NewsLine/>
        <ContentForParents/>
        <DevelopingEnvironment/>
    </div>

}

export default App;
