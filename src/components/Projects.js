import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';
import { Link, Route } from 'react-router-dom';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '176px',
                            background: 'url(https://reactjs.org/logo-og.png) center / cover'
                        }}>Eanpay</CardTitle>
                        <CardText>
                            This is a (full stack) web app that allows people to send or receive money to/from Africa and also helps in online payments of services. I used React and firebase.
                            <h6>Test Account</h6>
                            <h6>username: byusaj@gmail.com</h6>
                            <h6>password: testing</h6>
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Byusa/eanpay" target="_blank">
                                <Button colored>Github (Private repo)</Button>
                            </a>
                            <a href="https://eanpay20.netlify.app/" target="_blank">
                                <Button colored>Website</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '176px',
                            background: 'url(https://reactjs.org/logo-og.png) center / cover'
                        }}>Safe Shop</CardTitle>
                        <CardText>
                            This is a (full stack) web app is about buying and selling COVID prevention products online. People can either buy products or can create a store and sell products.
                            <h6>Test Account</h6>
                            <h6>username: byusa@gmail.com</h6>
                            <h6>password: testing</h6>

                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Byusa/staysafestore" target="_blank">
                                <Button colored>Github (Public repo)</Button>
                            </a>
                            <a href="https://safeshop.netlify.app/" target="_blank">
                                <Button colored>Website</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '176px',
                            background: 'url(https://reactjs.org/logo-og.png) center / cover'
                        }}>RwaStock</CardTitle>
                        <CardText>
                            This is a (full stack) web app that helps people to buy and sell stocks in Rwanda Stocks Exchange. I used React and firebase. (Currently building its mobile version).
                            <h6>Test Account</h6>
                            <h6>username: byusa@gmail.com</h6>
                            <h6>password: testing</h6>
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Byusa/RwandanStock" target="_blank">
                                <Button colored>Github (Private repo)</Button>
                            </a>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            );
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '176px',
                            background: 'url(https://codersera.com/blog/wp-content/uploads/2019/06/1_brkLSKX77Ue5lvzChwdCtw-1.gif) center / cover'
                        }}>React Native Project </CardTitle>
                        <CardText>
                            This project is about an album collection
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>App store</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '176px',
                            background: 'url(https://i.ytimg.com/vi/UUWgQuskEr0/maxresdefault.jpg) center / cover'
                        }}>Flash Point </CardTitle>
                        <CardText>
                            Flash Point is a unity A 3d Flash Point board game with all the abilities for the family & experience version.
                            It has networking embeded in it to allow up to 6 players to play together
                    </CardText>
                        <CardActions border>
                            <a href="https://github.com/Byusa/FlashPoint" target="_blank">
                                <Button colored>Github (Private repo)</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '176px',
                            background: 'url(https://i.ytimg.com/vi/UUWgQuskEr0/maxresdefault.jpg) center / cover'
                        }}>Maze Runner </CardTitle>
                        <CardText>
                            This a unity game, I generated the maze using Eller’s Algorithm and created a character to navigate through the maze while collecting projectiles and shooting them.
                    </CardText>
                        <CardActions border>
                            <a href="https://github.com/Byusa/FlashPoint" target="_blank">
                                <Button colored>Github (Private repo)</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            );
        } else if (this.state.activeTab === 3) {
            return (
                <div>
                    {/*Project 3*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '176px',
                            background: 'url(https://miro.medium.com/max/848/1*M9le42saJxWlOYyYvhKtPA.jpeg) center / cover'
                        }}>A Game Project </CardTitle>
                        <CardText>
                            The project is about Image classification
                    </CardText>
                        <CardActions border>
                            <a href="https://github.com/Byusa/Link-State-Routing-Simulation" target="_blank">
                                <Button colored>Github (Private repo)</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        }
        else if (this.state.activeTab === 4) {
            return (
                <div>
                    {/*Project 3*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '176px',
                            background: 'url(https://miro.medium.com/max/848/1*M9le42saJxWlOYyYvhKtPA.jpeg) center / cover'
                        }}>Link State Routing Simulation </CardTitle>
                        <CardText>
                            This project implements a simulator to the simplified Link-State Routing Protocol with the user space processes in Java.the simulation of the process of generating connection table for each router with one additional heartbeat feature ensures the lost neighbors are detected timely via socket and computes the shortest path from the router to all the other routers using the Dijkstra algorithm.
    
                    </CardText>
                        <CardActions border>
                            <a href="https://github.com/Byusa/Link-State-Routing-Simulation" target="_blank">
                                <Button colored>Github (Private repo)</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        }
    }

    render() {

        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>  React </Tab>
                    <Tab> React Native </Tab>
                    <Tab> Game Development </Tab>
                    <Tab> Machine Learning </Tab>
                    <Tab> Networking </Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content"> {this.toggleCategories()} </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}
export default Projects;