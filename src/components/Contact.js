import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Serge Jabo Byusa</h2>
                        <img
                            src="https://thumbs.dreamstime.com/z/black-man-business-character-working-computer-african-american-businessman-vector-illustration-99307913.jpg"
                            alt="avatar"
                            style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Serge Jabo Byusa is currently majoring in Computer Science at McGill University and a Microsoft Intern. He is passionate about programming, the creation of imaginary ideas and solving problems.
                            He is also a Game Developer and an web/App Developer has participated in Hackathons.
                            He is a coding/programming oriented person and he is looking forward to working in IoT, cloud computing, compiler design or machine learning company. His objective is to obtain a technical position in a software company utilizing his technical expertise, relevant experience, and problem-solving skills.
                            He also dreams of making a big invention in cloud computing and machine learning, and also believes that robots can be taken to a new high level that is so helpful to people in any society.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2> Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hiddeen="true"/>
                                        438 926 6506
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hiddeen="true"/>
                                        byusa.serge@gmail.com
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" aria-hiddeen="true"/>
                                        Skype Id: serge.byusa
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;