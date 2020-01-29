import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
class Me extends Component{
    render() {
        return(
            <div className = "AboutPage">
                <div style={{textAlign: 'center'}}>
                    <img
                        src="https://data.whicdn.com/images/297383972/original.jpg?t=1507281061"
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                <h2 style={{paddingTop: '2em'}}>Sojeong Cheon</h2>
                <h4 style={{color: 'grey'}}>KIST</h4>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <p>Hi, Hello, Nice to meet you~</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <h5>Address</h5>
                <p>Seoul</p>
                <h5>Phone</h5>
                <p>(82) 1062275312</p>
                <h5>Email</h5>
                <p>sojeong.cheon94@gmail.com</p>
                <h5>Web</h5>
                <p>mywebsite.com</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                </div>
                <div>
                    <h2 style={{paddingTop: '2em'}}>Education</h2>
                </div>

            </div>
        )
    }
}

export default Me;