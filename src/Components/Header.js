import React from 'react';
import logo from './Resources/logo.png';
import { Link } from "react-router-dom";


function Header({from}) {
    return (
        <div className="Header">
            <Link to ="/" ><img src={logo} width={"150px"} height={"25px"} className="Header-logo" alt="logo" /></Link>
            <div className='SearchBox'>
                <input type='search' placeholder='Looking for?' onChange={from} />
                <i class="fa fa-search"></i>
            </div>
            <div className='HeaderNav'>
                <h2><Link style={{ textDecoration:"none"}} to ="/categories" >Categories</Link></h2>
                <button class="LinkButton"><Link style={{ textDecoration:"none"}} to ="/SignIn" >GET LISTED</Link></button>
            </div>
        </div>
    );
}

export default Header;