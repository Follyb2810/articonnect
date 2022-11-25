import React from 'react';
import logo from './Resources/logo.png';
import { Link } from "react-router-dom"

export function HeaderWhite() {
    return (
        <div className="Header">
             <Link to ="/" ><img src={logo} width={"150px"} height={"25px"} className="Header-logo" alt="logo" /></Link>
           
            <div className='HeaderNav'>
            <h2><Link style={{ textDecoration:"none"}}to ="/categories">Categories</Link></h2>
            <button class="LinkButton"><Link style={{ textDecoration:"none"}} to ="/SignIn" >GET LISTED</Link></button>
            </div>
        </div>
    );
}

export function HeaderBrown(){
    return(
        <div className="Header1">
            <Link  style={{ textDecoration:"none"}} to ="/" ><img src={logo} width={"150px"} height={"25px"} className="Header-logo" alt="logo" /></Link>
             <div className='headerIcon'>
                <div><Link style={{ textDecoration:"none"}} to="/AddWork">Add Work &#8853;</Link></div>
                <div><Link style={{ textDecoration:"none"}} to="/Edit">Edit Profile</Link></div>
             </div>
           
            <div className='HeaderNav'>
                <div><Link style={{ textDecoration:"none"}} to="/Edit">&#8859;</Link></div>
                <div><Link style={{ textDecoration:"none"}} to="/Notification">&#128276;</Link></div>
                <Link style={{ textDecoration:"none"}} to="/Dash"><img src={require("../Components/Resources/me.jpg")} alt="" className="headerImg"/></Link>
                {/* height={"56"}width={"56"} border-radius={"50%"} */}
                {/* <h2>Categories</h2>
                <button class="LinkButton">GET LISTED</button> */}
            </div>
        </div>
    );
}


// export default HeaderWhite;