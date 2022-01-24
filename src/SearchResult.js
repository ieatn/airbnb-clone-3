import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

function SearchResult({
    img, 
    location, 
    title, 
    description,
    star,
    price, 
    total,
}) {
  return (
      <div className="searchResult">
          <img src={img} alt="" />
          <FavoriteBorderIcon className='heart' />
          <div className="info">
            <div className="infoTop">
                <p>{location}</p>
                <h3>{title}</h3>
                <p>____</p>
                <p>{description}</p>
            </div>
            <div className="infoBottom">
                <div className="stars">
                    <StarIcon className='star' />
                    <p><strong>{star}</strong></p>
                </div>
                <div className="price">
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
            </div>
          </div>
      </div>
  );
}

export default SearchResult;