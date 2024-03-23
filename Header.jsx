import React from "react";
function Header(props){
    return(
        <header>
        <p>{props.tittle}</p>
        </header>
    )}
    Header.defaultProps={
        tittle:"To do list"
    }
export default Header;