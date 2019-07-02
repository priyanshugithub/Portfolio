import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

const Experience = () => {
    return(
        <div className="experience">
        <h1 id="main-heading">Experience & Education</h1>
        <br />
        
        <VerticalTimeline>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Aug 2018 - Jun 2019"
      >
        <h3 className="vertical-timeline-element-title">Junior Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Fulltime Remote</h4>
        <p>
          
        </p>
      </VerticalTimelineElement>
      
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Feb 2018 - Nov 2018"
  >
    <h3 className="vertical-timeline-element-title">Google Developer Challenge Scholarship</h3>
    <h4 className="vertical-timeline-element-subtitle">Mobile Web Specialist Track</h4>
    <p>
      Selected among 150 recipients for Mobile Web Specialist Track by Google & Udacity
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Aug 2014 - July 2018"
    
  >
    <h3 className="vertical-timeline-element-title">Bachelors of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Computer Science & Engineering</h4>
    <p>
      RKGIT, Ghaziabad
    </p>
  </VerticalTimelineElement>


      <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Aug 2017 - Jan 2018"
  >
    <h3 className="vertical-timeline-element-title">Project Team Lead</h3>
    <h4 className="vertical-timeline-element-subtitle">Final Year Project</h4>
    <p>
      Worked as Team Lead alongwith my two team members to develop our final year project
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Sep 2017"
  >
    <h3 className="vertical-timeline-element-title">FullStack Nanodegree</h3>
    <h4 className="vertical-timeline-element-subtitle">Udacity</h4>
    <p>
      Completed FullStack Nanodegree Certification by Udacity, worked on multiple projects in Front End as well as Back End
    </p>
  </VerticalTimelineElement>

        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2017 - June 2017"
  >
    <h3 className="vertical-timeline-element-title">Web Development Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Bhopal, Madhya Pradesh</h4>
    <p>
      Web Development, Web Design, Web Hosting
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  />
</VerticalTimeline>
        </div>
);
};

export default Experience;