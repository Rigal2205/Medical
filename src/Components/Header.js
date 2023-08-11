import React from "react";

function Header(props){
    return(
        <>
            <div className="cart">
                Cart
                <sup>{props.count}</sup>
            </div>
        </>
    )
}

export default Header;