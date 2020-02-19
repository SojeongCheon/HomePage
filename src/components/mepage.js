import React, {Component} from 'react';
import './mepage.css'
import image from './resources/SojeongImg.jpg';

class Me extends Component{
    render() {
        const style={
            backgroundImage: `url(${image})`
        }

        return(
            <div className = "AboutPage">
                <div className="Intro">
                    <div style = {style} className="Img"></div>
                    <div className="IntroText">Sojeong Cheon</div>
                </div>

                <div className="Details">
                    <div className="Details-title">Education</div>
                    <div>Education</div>
                </div>
            </div>
        )
    }
}

export default Me;