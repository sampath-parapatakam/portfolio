import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Logo from '../images/sam.png';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Logo}
                alt="avatar"
                style={{height: '300px', borderRadius:'40px'}}
                 />
            </div>

            <h2 style={{paddingTop: '5px'}}>Sampath Kumar Reddy Parapatakam</h2>
            <h4 style={{color: 'grey'}}>Full Stack Application Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm a current Computer Science graduate student at University of North Carolina at Charlotte, passionate about Full Stack Development and Software Engineering roles. Previously worked as a Student Developer at Research and Consulting Center -VNRVJIET, Full Stack Developer Intern at Informative Technologies and Junior Web Developer at Tabner INC during which I had the chance to work on JavaScript technologies. Experienced in building REST-API services using NodeJS and ReactJS . Overall bringing in 2+ years of experience in Software development using JavaScript, HTML5, CSS3, jQuery, Bootstrap, ReactJS, NodeJS, Angular7 and AJAX. I am looking for Full-time opportunities in the field of Web Application Development or Software Engineering starting January 2020. I could be reached at sparapat@uncc.edu or +1 (980)-585-7168.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>216 Barton Creek Drive, Apt E, Charlotte, NC, USA, 28262</p>
            <h5>Phone</h5>
            <p>(980) 585-7168</p>
            <h5>Email</h5>
            <p>sampathkr693@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2018}
              schoolName="VNR VJIET"
              schoolDescription="Completed 4 year Bachelor's degree with Computer Science as my major"
              gpa="7.52 / 10"
               />

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="University of North Carolina at Charlotte"
              schoolDescription="Computer Science major Graduate Student, graduating December 2019"
              gpa="4 / 4"
            />

              <h2>Experience</h2>

            <Experience
              startYear="May 2017"
              endYear="May 2018"
              jobRole="Student Developer"
              company="RCC VNR VJIET"
              jobDescription="•	Responsible for developing Responsive Web Application for Convergence 2k18. Implemented Mobile-First responsive website using Bootstrap, jQuery and JavaScript which helped to increase User Interaction and Experience. 
              •	Worked in a team of 4 on an IOT based Deep Learning project using Raspberry-pi bot, enabled the movement of the bot and built a Web Application for controlling the movement of bot using Bootstrap, JavaScript and web-io-pi framework. 
              •	Managed the flow of project by following SDLC, had meetings every 2 weeks to update status of project and get feedback.
              "
              />

              <Experience
                startYear="May 2019"
                endYear="August 2019"
                jobRole="Full Stack Developer Intern"
                company="Informative Technologies"
                jobDescription="•	Worked on WordPress to design the organization website and create custom plugins for website.
                •	Built a Web Application using ReactJS to get details of laptops with older hardware that are supported by Linux OS. Implemented auto suggest feature to enhance search capabilities and user experience.
                "
                />

              <Experience
                startYear="September 2019"
                endYear="December 2019"
                jobRole="Junior Web Developer (Co-op / Intern)"
                company="Tabner Inc."
                jobDescription="•	Built a MEAN stack project for retrieving employee details, used JWT for login authentication. Enhanced the performance of the application by using Sequalize ORM for MySQL. Gained firsthand experience with Angular, Git/GitHub, NodeJS, ExpressJS.
                •	Worked on project for health care client where we had to design website with dashboards and forms with animations.                
                "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={95}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={90}
                    />
                    <Skills
                      skill="React"
                      progress={85}
                      />
                    <Skills
                      skill="Angular"
                      progress={90}
                      />
                    <Skills
                      skill="MongoDB"
                      progress={80}
                      />
                    <Skills
                      skill="MySQL"
                      progress={85}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
