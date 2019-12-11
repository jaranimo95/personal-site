import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.cisco.com/c/en/us/products/security/what-is-network-access-control-nac/_jcr_content/Grid/subcategory_atl_8acc/layout-subcategory-atl/anchor_info_127c/image.img.png/1575361681873.png) center / cover'}}>Access Control Engine</CardTitle>
                        <CardText>
                            Simple access control engine backed by a trie data structure. Reads in custom control file and populates trie with users, roles with associated permissions, and files w access tags.
                        </CardText>
                        <a href="https://github.com/jaranimo95/access_control_engine">
                                <Button colored>Github</Button>
                            </a>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/why-go-wireless/_jcr_content/Grid/category_atl_e971/layout-category-atl/anchor_info_a13f/image.img.jpg/1567588326553.jpg) center / cover'}}>CSMA-CA Simulator</CardTitle>
                        <CardText>
                            A simple simulation of IEEE 802.11 medium access for wireless communication, making use of multithreading to simulate network actors.
                        </CardText>
                        <a href="https://github.com/jaranimo95/csma-ca_simulator">
                                <Button colored>Github</Button>
                            </a>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.pymnts.com/wp-content/uploads/2019/05/SAP-software-vulnerable-hack-security-fraud.jpg) center / cover'}}>Modular Exponential Side Channel Attack</CardTitle>
                        <CardText>
                        Demo of a side-channel vulnerability presented by conditional branching in modular exponentiation algorithms. Includes two different modexp algs (one susceptible to a side channel attack, and one resistant to it), as well as byte-level implementation of multiplication and modulo operations.
                        </CardText>
                        <a href="https://github.com/jaranimo95/modexp_sidechannel">
                                <Button colored>Github</Button>
                            </a>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.nintendoworldreport.com/media/44212/1/7.jpg) center / cover'}}>Cave Story Engine Demo</CardTitle>
                        <CardText>
                            I did a mini recreation of the engine from the game Cave Story that loads the first map using a tileset and graphics pipeline, supporting player gravity, collision, and slopes! Written in C++.
                        </CardText>
                        <a href="https://github.com/jaranimo95/cavestory_demo">
                                <Button colored>Github</Button>
                            </a>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.scdn.co/image/1c0d3e387bdf0b18e9e600f285cc2f36d1b677b3) center / cover'}}>More to Come</CardTitle>
                        <CardText>
                            Currently, this site is my only React project... stay tuned!
                        </CardText>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 3) {
            return(
                <div className="projects-grid">

                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.scdn.co/image/1c0d3e387bdf0b18e9e600f285cc2f36d1b677b3) center / cover'}}>Digging, 2018</CardTitle>
                        <CardText>
                            My first full-length release, written and recorded in my various bedrooms over the course of a year. It showcases my early stages of production technique as I move to carve out a niche all my own.
                        </CardText>
                        <CardActions border>
                            <a href="https://sansivy.bandcamp.com/album/digging">
                                <Button colored>Bandcamp</Button>
                            </a>
                            <a href="https://open.spotify.com/artist/5AHpscQne6rDnFfNjQl5HW">
                                <Button colored>Spotify</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://f4.bcbits.com/img/a1254957633_2.jpg) center / cover'}}>Rain Cloud, 2019</CardTitle>
                        <CardText>
                            The first single off my upcoming release: "Tomorrow, the Darkest Pool". Will be featured at track #2 on the full-length release.
                        </CardText>
                        <CardActions border>
                            <a href="https://sansivy.bandcamp.com/track/rain-cloud">
                                <Button colored>Bandcamp</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://f4.bcbits.com/img/a2626764905_16.jpg) center / cover'}}>Diafortune, 2014-2017</CardTitle>
                        <CardText>
                            Demo tape consisting of home recordings from 2014 up through 2017. This was meant as a showcase of my journey through DIY production over my term in college.
                        </CardText>
                        <CardActions border>
                            <a href="https://sansivy.bandcamp.com/album/diafortune">
                            <Button colored>Bandcamp</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return(

            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Java</Tab>
                    <Tab>C++</Tab>
                    <Tab>React</Tab>
                    <Tab>Bandcamp</Tab>
                </Tabs>

                <div className="grid-container"></div>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>

            // <div style={{width:'100%',margin:'auto'}}>
            //     <Grid className="home-grid">
            //         <Cell col={12}>
            //             <a href="https://sansivy.bandcamp.com/track/rain-cloud">
            //                 <img 
            //                     src="https://f4.bcbits.com/img/a1254957633_2.jpg"
            //                     alt="Rain Cloud"
            //                     className="home-img"
            //                 />
            //             </a>
            //             <a href="https://open.spotify.com/artist/5AHpscQne6rDnFfNjQl5HW">
            //                 <img 
            //                     src="https://i.scdn.co/image/1c0d3e387bdf0b18e9e600f285cc2f36d1b677b3"
            //                     alt="Artist Page"
            //                     className="home-img"
            //                 />
            //             </a>
            //         </Cell>
            //     </Grid>
            // </div>
        )
    }
}

export default Projects;