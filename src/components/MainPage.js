import React from 'react';
import Particles from 'react-particles-js';
import './MainPage.css';

const particlesOptions = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 1,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 7
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

const MainPage = () => {
    return (
        <div>
    <Particles className='particles' params={particlesOptions} />
    <div className="portfolio">
    <h1 className="main-heading">Hi,I'm Priyanshu...!!</h1>
    <h3 className="sub-heading">a junior fullstack developer</h3>

    <div className="index">
    <a href="/about">About Me |</a>
    <a href="/projects"> Projects |</a>
    <a href="/experience"> Experience |</a>
    <a href="/certifications"> Certifications |</a>
    <a href="/blogs"> Blogs</a>
    </div>

    <div className="icons">
    <a href="https://github.com/priyanshugithub" target="_blank" rel="noopener noreferrer"><i className="github square icon"></i></a> 
    <a href="https://www.linkedin.com/in/priyanshutyagi1996/" target="_blank" rel="noopener noreferrer"><i className="linkedin icon"></i></a>
    <a href="https://twitter.com/priyanshucodes" target="_blank" rel="noopener noreferrer"><i className="twitter square icon"></i></a>
    </div>
    
    </div>
    </div>);
};

export default MainPage;