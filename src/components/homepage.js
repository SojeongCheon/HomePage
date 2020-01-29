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
        },
        size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0,
              sync: false
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#ffffff"
            },
        polygon: {
            nb_sides: 5
            },
        opacity: {
            value: 0.3,
            random: false,
            anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false
            }
            },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
            },
        move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
                }
            }
        }
    }
}

class Home extends Component{
    render() {
        return(
            <div className = "HomeContents">
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
                <div className = "HomeText">
                    <h1>Hi,</h1>
                    <h1>I'm <text className="Name">Sojeong Cheon <text className="Smile">;)</text></text></h1>
                    <h1>Medical Image Processing Researcher.</h1>
                </div>


            </div>
        )
    }
}

export default Home;