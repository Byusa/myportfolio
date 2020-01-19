import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex' }}>{this.props.skill}
                    <ProgressBar style={{ margin: 'auto', width: '75%' }} progress={this.props.progress} />
                </div>
            </div>
        )
    }
}
export default Skills;