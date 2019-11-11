import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', opacity:0.9, background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Fitness Application</CardTitle>
            <CardText>
              Web Application using express-sessions, async-await for asynchronous request-response of data from database and salt hash passwords for securing login, users can login-in, post their regimes and subscribe to other’s regimes.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/sampath-parapatakam/Fitness-Final">GitHub</Button>
            </CardActions>
          </Card>
          
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', opacity:0.9, background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Auto Complete</CardTitle>
          <CardText>
            React Application which helps in finding the laptops with old hardware specifications which are supported by certain versions of Linux Operating system.
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/sampath-parapatakam/">GitHub</Button>
          </CardActions>
        </Card>
      </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://angular.io/assets/images/logos/angular/angular.svg) center / cover', opacity: 0.9}} >Employee Form (MEAN Stack)</CardTitle>
            <CardText>
             	Developed a MEAN Stack Application using Reactive Forms, JWT for authentication, built RESTful API for employee data and consumed it to display details. Scaled the application with Sequalize ORM for MySQL.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#000', height: '176px', opacity:0.9, background: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80) center / cover'}} >Visualization Project</CardTitle>
         <CardText>
           Visualization using D3.js and svg to give customer behavior analysis for Lending tree dataset. 
         </CardText>
         <CardActions border>
           <Button colored>GitHub</Button>
         </CardActions>
       </Card>
       </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Others</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
