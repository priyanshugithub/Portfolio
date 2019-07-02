import React from 'react';
import {  } from 'react-bootstrap';
import profilepic from '../img/my.jpg';
import './About.css';

const About = () => {
    return(
        <div className="about">
        <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <img src={profilepic} class="br-100 h6 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
    <h1 class="f3 mb2">Priyanshu Tyagi</h1>
    <h2 class="f5 fw4 gray mt0">Junior Fullstack Developer</h2>
  </div>
</article>
<br />
<br />
<br />
<h3>Full Time Remote Fullstack Developer with an excellent work ethic and an ability to learn and adapt to a changing environment. Currently looking for Full Time Opportunity as a Fullstack Developer(Pan-India). I have also been a Full Stack and Mobile Web Specialist Nanodegree Graduate from Udacity and been the Team Leader for my College Project which demonstrates my ability to work effectively in teams and build strong relationships. My most recent Resume is attached below for more info on my projects and recent work. </h3>
        </div>
    );
};

export default About;