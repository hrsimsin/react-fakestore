import React from 'react'

const ProductItem = ({item}) => {
    return (
        <div className='wrapper'>
            <div class="product-img">
                <img src={item.image} height="420" width="327" />
            </div> 
            <div class="product-info">
                <div class="product-text">
                    <h1>{item.title}</h1>
                    <h2>{item.category}</h2>
                    <p>{item.description}</p>
                </div>
                <div class="product-price-btn">
                    <p><span>{item.price}</span>$</p>
                    <button type="button">buy now</button>
                </div>
            </div>           
        </div>
    )
}

export default ProductItem
