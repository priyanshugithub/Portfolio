import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import About from './components/About';
import Experience from './components/Experience';
import './App.css';

//import particlesoptions from './components/particles.json';

class App extends React.Component {
    render() {
        return(
        <div className="App">
        <BrowserRouter><Route path="/" exact component={MainPage} /></BrowserRouter>
        <BrowserRouter><Route path="/about" exact component={About} /></BrowserRouter>
        <BrowserRouter><Route path="/experience" exact component={Experience} /></BrowserRouter>
        </div>
        );
    }
}

export default App;