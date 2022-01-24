import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from "@material-ui/core";
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                {/* send to home page by pressing airbnb logo, link instead of a tag bc a tag refreshes */}
                <Link to='/'>
                    <img className="header_icon" src="https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg" alt="" width='200px'/>
                </Link>
            </div>
        
            <div className="header_center">
                <input type="text" />
                <SearchIcon /> 
            </div>
            <div className="header_right">
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header