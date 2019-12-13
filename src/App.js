import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import {Link} from 'react-router-dom';

import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <a href="https://jaranimo95.github.io/resume/">Resume</a>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
