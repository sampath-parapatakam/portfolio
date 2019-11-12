import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div className="about">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <h1 className="about-me">About Page</h1>
          <ul className="about-me-paragraph">
            <li>Full Stack Web Developer using MongoDB, Express, React, Node.js, Angular, Express.js (MERN and MEAN) with an emphasis on Frontend web development
            and mobile using React & Angular.
            </li> <br></br>
            <li>
              Experienced in building CRUD applications, RESTful APIs using Node.js
            and express, User Auth and oAuth with JWT and Firebase.
            </li> <br></br>
            <li>Common libraries of use: Axios, Redux, Mongoose,
            Sequalize, Lodash, Express, body-parser, socket.io, react-router, react-move.
            </li> <br></br>
            <li> Common use of UI libraries: Bootstrap 4,
            React-Bootstrap, Angular Material, Material-UI.
            </li>
          </ul>
        </div>
      </div>
      </div>
    )
  }
}

export default About;
