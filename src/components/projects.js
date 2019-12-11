import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Projects extends Component {
    render() {
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <a href="https://sansivy.bandcamp.com/track/rain-cloud">
                            <img 
                                src="https://f4.bcbits.com/img/a1254957633_2.jpg"
                                alt="Rain Cloud"
                                className="home-img"
                            />
                        </a>
                        <a href="https://open.spotify.com/artist/5AHpscQne6rDnFfNjQl5HW">
                            <img 
                                src="https://i.scdn.co/image/1c0d3e387bdf0b18e9e600f285cc2f36d1b677b3"
                                alt="Artist Page"
                                className="home-img"
                            />
                        </a>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;