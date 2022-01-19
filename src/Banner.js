import React, {useState} from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import Search from './Search';

 
function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner-search">
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} 
                    className='banner_searchButton' variant='outlined'>
                    {/* ternary operator, if calender is open, display hide on button */}
                    {showSearch ? 'Hide': 'Search Dates'}
                </Button>
            </div>
            <div className="banner-info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway</h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
