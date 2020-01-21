import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="avatar"
                            style={{ height: '200px' }}
                        />
                    </div>
                    <h2 style={{ paddingTop: '2em' }}> Serge Jabo Byusa</h2>
                    <h4 style={{ color: 'grey' }}> Programmer </h4>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    <p> Fluent in ​Java, C#, C, OCaml, Python, bash, MIPS Assembly and C++, ​Web development (​ HTML, CSS, Javascript, and XAML​) and I have experience with Linux OS. I am also experienced with ​game development​ and ​Xamarin app development ​and​ React Native. </p>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    <h5> Address</h5>
                    <p> 3464 Hutchison Street</p>
                    <h5>Phone</h5>
                    <p>4389266506</p>
                    <h5>Email</h5>
                    <p>byusa.serge@gmail.com</p>
                    <h5>Web</h5>
                    <p>www.SergeJaboByusa.com</p>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    
                </Cell>
    

                <Cell className="resume-right-col" col={8}> 
                    <Education
                    startYear={2016}
                    endYear={2020}
                    schoolName="McGill University"
                    schoolDescription="Computer Science Major"
                    relatedCourses="Related Courses: Algorithms and Data Structures, Software System, Operating System, Software
                    Design, Modern Game Development,Programming languages and paradigms, Machine Learning, Networking, Cloud Computing.
                    "/>
                    <hr style={{borderTop: '3px solid #e22947'}}/>

                    <h2>Experience </h2>
                    <Experience
                        startYear="06/2019"
                        endYear="09/2019"
                        CompanyName="Microsoft - ​Seattle, USA"
                        jobName="Software Engineer"
                        jobDescription="I implemented a library (using c#) for Azure App configuration that integrates Azure App configuration with Key Vault. 
                        Now users can keep a reference of their Key Vault secrets (connection strings, passwords) in App Configuration and benefits from it’s features."/> 
                    <Experience
                        startYear="05/2018"
                        endYear="06/2018"
                        CompanyName="Microsoft - ​Seattle, USA"
                        jobName="Explore Intern (Software Engineer And Program Manager)"
                        jobDescription="I implemented an extension (a WPF app using XAML and C#) 
                        for Visual Studio to facilitate blind and visually impaired programmers in coding using Visual Studio."
                    /> 
                    <Experience
                        startYear="06/2017"
                        endYear="08/2017"
                        CompanyName="​Pivot Access - Kigali, Rwanda"
                        jobName="Software Engineer Intern"
                        jobDescription="Contributed to the creation of a software that prints receipts for prepaid Cash Power on a POS
                        and Developed an android and IOS app for easy money transfer"
                    /> 
                    <hr style={{borderTop: '3px solid #e22947'}}/>

                    <h2> Skills</h2>
                    <Skills
                        skill = "Java "
                        progress={95}
                    />
                    <Skills
                        skill = "c#"
                        progress={90}
                    />
                    <Skills
                        skill = "Javascript"
                        progress={90}
                        />
                    <Skills
                        skill = "React"
                        progress={90}
                    />
                    <Skills
                        skill = "React"
                        progress={80}
                    />
                    <Skills
                        skill = "Ocaml"
                        progress={50}
                    />
                    <Skills
                        skill = "C"
                        progress={50}
                    />

                </Cell>
            </Grid>
        )
    }
}
export default Resume;