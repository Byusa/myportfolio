import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://avatars0.githubusercontent.com/u/14948121?s=460&v=4"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web/App developer</h1>
                            <hr />
                            <p> Java | C# | Javascript | C++ | Python |React | React Native | NodeJS |  HTML/CSS </p>
                            <div className="social-links">
                                
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/sergejabobyusa/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/Byusa" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-github" aria-hidden="true" ></i>
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