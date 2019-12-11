import React from 'react';
import {Layout, Header, Navigation, Textfield, Drawer, Content } from 'react-mdl';
import {Link} from 'react-router-dom';

import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
