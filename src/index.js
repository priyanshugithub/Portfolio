import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return(
        <div id="wrapper">
        <div className="portfolio">
        <h1 className="main-heading">Hi,I'm Priyanshu!!</h1>
        <h3 className="sub-heading">Junior Fullstack Developer</h3>
        <br />
        <div className="icons">
        <a href="https://github.com/priyanshugithub" target="_blank" rel="noopener noreferrer"><i className="github square icon"></i></a>
        <a href="https://www.linkedin.com/in/priyanshutyagi1996/" target="_blank" rel="noopener noreferrer"><i className="linkedin icon"></i></a>
        <a href="https://twitter.com/priyanshucodes" target="_blank" rel="noopener noreferrer"><i className="twitter square icon"></i></a>
        </div>
        
        </div>
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));