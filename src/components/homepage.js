import React, {Component} from 'react';
import Particles from 'react-particles-js';


const particleOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 1000
            }
        }
    }
}
class Home extends Component{
    render() {
        return(
            <div className = "HomeContents">
                <h1>Home Page</h1>
                <Particles 
                style = {{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "60px",
                    width: "100%",
                    height: "100%"
                }}
                params={particleOpt} 
                />


            </div>
        )
    }
}

export default Home;