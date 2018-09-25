import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

export class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Supriya Telke</h2>
                        <img 
                            src="https://pickaface.net/gallery/avatar/unr_andrea_180719_0857_bkpi.png"
                            alt="avatar"
                            style={{height:'250px'}}
                            />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>I'm, a Developer specialising in front-end content production, with experience of developing UI Components in React. I have been working for the Sci-Code as part of developement team since March 2018.I enjoy challenging myself to write flexible and maintainable code. </p>
                        </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                            (+47)(97376813)
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                            supriyatelke@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        www.linkedin.com/in/supriyatelke
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