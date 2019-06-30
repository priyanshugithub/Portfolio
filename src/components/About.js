import React from 'react';
import {  } from 'react-bootstrap';
import profilepic from '../img/my.jpg';

const About = () => {
    return(
        <div>
        <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <img src={profilepic} class="br-100 h6 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
    <h1 class="f3 mb2">Priyanshu Tyagi</h1>
    <h2 class="f5 fw4 gray mt0">Junior Fullstack Developer</h2>
  </div>
</article>
        </div>
    );
};

export default About;