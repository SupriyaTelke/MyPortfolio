import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export class Education extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startYear}-{this.props.endYear}</p>
                    </Cell>
                    <Cell col={8} >
                        <h4 style={{marginTop:"0px"}}>{this.props.degreeName}</h4>
                        <p>{this.props.marks}</p>
                        <p>{this.props.schoolName}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Education;