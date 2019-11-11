import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Logo from '../images/sam.jpg';
import Skills from './skills';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Logo}
              alt="avatar"
              className="avatar-img"
              style={{height: '300px'}}
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML5/CSS3 | Bootstrap | JavaScript | React | Angular | NodeJS | Express | MongoDB | MySQL</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/sampath-parapatakam" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/sampath-parapatakam" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        
        <Cell className="skills_lan">
          <h2>Skills</h2>
        <Skills
                skill="Javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={85}
                    />
                    <Skills
                      skill="React"
                      progress={85}
                      />
                    <Skills
                      skill="Angular"
                      progress={80}
                      />
                    <Skills
                      skill="MongoDB"
                      progress={75}
                      />
                    <Skills
                      skill="MySQL"
                      progress={80}
                      />
            </Cell>
          </Grid>
        </div>
      
    )
  }
}

export default Landing;
