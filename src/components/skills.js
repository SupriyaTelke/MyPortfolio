import React, { Component } from 'react';
import  { Grid, Cell, ProgressBar } from 'react-mdl';

export class Skills extends Component{
    render(){
        return(
            <Grid>
                <Cell col={3}>
                        {this.props.skill}
                </Cell>
                <Cell col={9}>
                    <ProgressBar style={{margin:"auto" , width:"75%"}}
                        progress={this.props.progress}/>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;