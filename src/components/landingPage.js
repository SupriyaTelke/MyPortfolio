import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

export class LandingPage extends Component{
    render(){
        return(
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className= "landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://pickaface.net/gallery/avatar/unr_andrea_180719_0857_bkpi.png"
                            alt="avatar image"
                            className= "avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Front-End Developer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | React | Redux | C# | SQL</p>
                            <div className="social-links">
                            <a href="http://goggle.com" rel="noopener noreferre" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                             <a href="http://goggle.com" rel="noopener noreferre" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                             <a href="http://goggle.com" rel="noopener noreferre" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true"/>
                            </a>

                             <a href="http://goggle.com" rel="noopener noreferre" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"/>
                            </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;