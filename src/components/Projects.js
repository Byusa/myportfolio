import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';


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
                        }}>React Project #1</CardTitle>
                        <CardText>
                            This project is about buying and selling products online. People can either buy products or can create a store and sell products.
                    </CardText>
                        <CardActions border>
                            <Link colored to="https://github.com/Byusa/DollarStores"> Github</Link>
                            <Button colored>Website</Button>
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
                        }}>React Project #2</CardTitle>
                        <CardText>
                            This project is about buying and selling products online. People can either buy products or can create a store and sell products.
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Website</Button>
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
                        }}>React Project #3</CardTitle>
                        <CardText>
                            This project is about buying and selling products online. People can either buy products or can create a store and sell products.
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Website</Button>
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
                            <Button colored>Website</Button>
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
                        }}>A Game Project </CardTitle>
                        <CardText>
                            Flash Point unity Game
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Website</Button>
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
                        }}>A Game Project </CardTitle>
                        <CardText>
                            Maze generator
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Website</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: 'white', height: '176px',
                            background: 'url(https://i.ytimg.com/vi/UUWgQuskEr0/maxresdefault.jpg) center / cover'
                        }}>A Game Project </CardTitle>
                        <CardText>
                        Maze generator
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Website</Button>
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
                            <Button colored>Github</Button>
                            <Button colored>Website</Button>
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