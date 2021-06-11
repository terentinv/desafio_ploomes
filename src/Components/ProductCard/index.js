import React from 'react';

// import { Container } from './styles';
import './index.css';

const ProductCard = (props) => {
    console.log(props.name);
  return (
    <div className='card-container'>
      <div className='left-image'></div>
      <div className='center-info'>
        <label className='info-name'>{props.name}</label>
        <div className='price-info-container'>
          <label className='info-price'>{`$${props.price}`}</label>
          <label className='info-discount-price'>{props.discountPrice}</label>
        </div>
      </div>
      <div className='right-button-container'>
        <div className='right-button'>
          <label className='view-details-text'>View Details</label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
