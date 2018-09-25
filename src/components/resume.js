import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {Education} from './education';
import Experience from './experience';
import Skills from './skills';


export class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4} >
                        <img 
                             src="https://pickaface.net/gallery/avatar/unr_andrea_180719_0857_bkpi.png"
                             alt="avatar image"
                             className= "avatar-img"
                             style={{height:"200px"}}
                        />
                        <h2 style={{paddingTop:"2em"}}>Supriya Telke</h2>
                        <h4 style={{color:"gray"}}>Front-End Developer</h4>
                        <hr style={{borderTop:"3px solid #833fb2" ,width:"50%"}}/>
                        <p>I'm, a Developer specialising in front-end content production, with experience of developing UI Components in React. I have been working for the Sci-Code as part of developement team since March 2018.I enjoy challenging myself to write flexible and maintainable code.</p>
                        <hr style={{borderTop:"3px solid #833fb2" ,width:"50%"}}/>
                        <h5>Address</h5>
                        <p>Fernanda Nissens Gate 7A ,Oslo,0484</p>
                        <h5>Phone</h5>
                        <p>(+47)(97376813)</p>
                        <h5>Email</h5>
                        <p>supriyatelke@gmail.com</p>
                        <h5>WebSite</h5>
                        <p>supriyatelke.com</p>
                        <hr style={{borderTop:"3px solid #833fb2" ,width:"50%"}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2007}
                            endYear={2010}
                            degreeName="MCA(Master of Computer Application)"
                            marks="First Class with 64%"
                            schoolName="ICFAI University,Tripura, India"
                        />
                        <Education
                            startYear={2004}
                            endYear={2007}
                            degreeName="BCS(Bachelor of Computer Science)"
                            marks="First Class with Distinction"
                            schoolName="Shivaji University of Kolhapur,Maharashtra,India"
                        />
                        <hr style={{borderTop:"3px solid #e22947"}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear="present"
                            companyName="Front-End Developer at Sci-Code AS Norway"
                            jobDescription=
                                {<ul>
                                    <li>
                                     As a Front-End developer,gained knowledge of following topics: react.js (JSX, components, props, state, event handling, etc.), redux.js (unidirectional data binding, ﬂux architecture, actions, action creators, store, reducers, dispatch, connect, mapStateToProps,mapDispatchToProps,sagaetc.),html,css,webdesignusing webﬂow,and more. 
                                    </li>
                                    <li>
                                    As a team member, working on Author platform in Content manufacturing project. During this project development,involved in creating and testing Actions,Action creators,Reducers,API integration with Saga middle-ware etc. 
                                    </li>
                                    <li>
                                    As an individual developed Student progress road-map to depicts the student’s progress in particular course.  
                                    </li>
                                    <li>
                                    DevelopedManualcorrectionreactcomponentwhereteacherscan check student’s answer and give any related feedback. 
                                    </li>
                                </ul>}
                        />
                        <Experience
                            startYear={2012}
                            endYear={2014}
                            companyName="Graduate Computer Science Lecturer at V Y College,Kolhapur,India"
                            jobDescription=
                                {<ul>
                                    <li>
                                    TaughtComputerfundamental,SQL,VB.Net,basicofnetworking,ECommerce subjects
                                    </li>
                                </ul>}
                        />
                        <Experience
                            startYear={2010}
                            endYear={2011}
                            companyName=" Jr. Software Developer at Kalpana Software Pvt. Ltd.,Kolhapur,India"
                            jobDescription=
                                {<ul>
                                    <li>
                                    DevelopedaHotelManagementSystem.Thisapplicationwasdeveloped to perform various tasks such as, registration of new guest, managing various services for the room, checkout, billing, reporting etc.,using Vb.Net(3.5Framework) and SQLServer2008 
                                    </li>
                                    <li>
                                    Involved in development of a Employee Information System.Using thisapplicationusercankeepinformationofemployeeswithimage aswellascreates&issuestheidentitycardtotheemployees.Used Vb.Net (3.5 Framework) and SQL Server 2008 for data storage. 
                                    </li>
                                    <li>
                                    CreatedDataTransferprojectfromTextFiletoSQLServerusingC# (3.5 Framework) And SQL Server 2008 
                                    </li>
                                </ul>}
                        />
                        <hr style={{borderTop:"3px solid #e22947"}}/>
                        <h2>Skills</h2>
                        <Skills 
                            skill="JavaScript, React and Redux"
                            progress={80}
                        />
                        <Skills 
                            skill="Vb.net, C# and SQL server"
                            progress={65}
                        />
                        <Skills 
                            skill="C , C++"
                            progress={50}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;