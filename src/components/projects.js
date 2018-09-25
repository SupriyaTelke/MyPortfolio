import React, {Component} from 'react';
import {Grid, Cell, Card, CardActions, CardText, Button, CardTitle, CardMenu, IconButton} from 'react-mdl';

export class Projects extends Component{
    render(){
        return(
            <div>
                <Grid >
                    <Cell col={6}>
                        <div className="project-grid">
                        <Card shadow={5} style={{minWidth:"450" , margin:"auto"}}>
                            <CardTitle style={{color:'#fff', height:"176px", background:"url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover"}}>
                                React Project #1 
                            </CardTitle>
                            <CardText>
                                This is sample project
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>Codeopen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: "#fff"}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth:"450" , margin:"auto"}}>
                            <CardTitle style={{color:'#fff', height:"176px", background:"url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover"}}>
                                React Project #1 
                            </CardTitle>
                            <CardText>
                                This is sample project
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>Codeopen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: "#fff"}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;