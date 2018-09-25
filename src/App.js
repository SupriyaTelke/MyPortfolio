import React, { Component } from 'react';
import './App.css';
import {Layout, Navigation ,Header, Drawer, Content} from 'react-mdl';
import {Switch, Route, Link } from 'react-router-dom';
import {LandingPage} from './components/landingPage';
import {AboutMe} from './components/aboutMe';
import {Contact} from './components/contact';
import {Projects} from './components/projects';
import {Resume} from './components/resume';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
    <Header className='header-color' title={<Link style={{textDecoration:"none", color:"white"}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
    <Drawer title={<Link style={{textDecoration:"none", color:"black"}} to="/">My Portfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Switch>
              <Route exact path='/' component={LandingPage}/>
              <Route path='/aboutme' component={AboutMe}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/resume' component={Resume}/>
              <Route path='/projects' component={Projects}/>
            </Switch>
        </Content>
    </Layout>
</div>


    );
  }
}

export default App;
