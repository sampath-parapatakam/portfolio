import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Logo from '../images/sam.jpg';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Sampath Kumar Reddy Parapatakam</h2>
            <img
              src={Logo}
              alt="avatar"
              style={{height: '300px', borderRadius:"30px"}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Full Stack Developer | Looking for Full-Time Opportunities</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (980) 585-7168
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    sampathkr693@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    vickyreddy683@gmail.com
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
