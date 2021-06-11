import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import './index.css';
import mockData from '../../productList.json';

function ProductList() {
  const [productListMock, setProductListMock] = useState([]);
  useEffect(() => {
    setProductListMock(mockData);
  }, [productListMock]);
  console.log(productListMock);

  return (
    <div className='product-list-container'>
      {productListMock.map((productList) => (
        <ProductCard
          key={productList.ProductId}
          name={productList.Name}
          price={productList.Price}
          discountPrice={productList.RetailPrice}
        />
      ))}
    </div>
  );
}

export default ProductList;
