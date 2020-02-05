import React from 'react';
import './Button.css'
import { AiOutlineHome} from "react-icons/ai";

class Button extends React.Component{
    // onButtonClicked(){
    //     alert("ButtonClicked")
    // }

    render(){
        return(
            // <div onClick={e=>{this.onButtonClicked()}} className="button">
            //     {this.props.name}
            // </div>
            <div className="button">
                {this.props.icon}
            </div>
        )
    }
}

export default Button;