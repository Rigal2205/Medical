import React from "react";
import './CSS/Footer.css'

function Alert(props){
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return(
        <div className="alert" style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        
        </div>}
        </div>
    )
}

export default Alert;