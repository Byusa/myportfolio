import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

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
                <div> <h1>This is React Native</h1></div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Game Development</h1></div>
            );
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is Machine Learning</h1></div>
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