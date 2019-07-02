import React from 'react';
import {  } from 'react-bootstrap';
import profilepic from '../img/my.jpg';
import './About.css';

const About = () => {
    return(
        <div className="about">
        
  <div class="tc">
  <div class ="photo-wrapper">
    <img src={profilepic} class="br-100 shadow-5 b--blue h8 w5 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
    </div>
    <h1 class="f3 mb2 name">Priyanshu Tyagi</h1>
    <h2 class="f5 fw4 gray mt0 position">Junior Fullstack Developer</h2>
  </div>

<br />
<br />
<br />

<div class="markdown">
<p className="bio">Full Time Remote Fullstack Developer with an excellent work ethic and an ability to learn and adapt to a changing environment. Currently looking for Full Time Opportunity as a Fullstack Developer(Pan-India). I have also been a Full Stack and Mobile Web Specialist Nanodegree Graduate from Udacity and been the Team Leader for my College Project which demonstrates my ability to work effectively in teams and build strong relationships. My most recent Resume is attached below for more info on my projects and recent work. </p>
</div>
</div>
    );
};

export default About;