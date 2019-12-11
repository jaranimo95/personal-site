import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        
                        <img 
                            src="https://f4.bcbits.com/img/0009565306_20.jpg"
                            alt="GitHub"
                            className="home-img"
                        />

                        <div className="banner-text">
                            <h1>Christian Jarani, Computer Science B.S.</h1>
                            <hr/>
                            <p>HTML/CSS | Angular | React | Javascript/Typescript</p>
                            <div className="social-links">

                                <a href="https://www.linkedin.com/in/cjarani/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                <a href="https://github.com/jaranimo95" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github-square" aria-hidden="true" />
                                </a>

                                <a href="https://sansivy.bandcamp.com" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-bandcamp"></i>
                                </a>

                                <a href="https://www.hackerrank.com/chris_jarani" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-hackerrank"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;