import React from 'react'
import ProductItem from './ProductItem'
import Spinner from '../ui/Spinner'

const ProductGrid = ({isLoading, items}) => {
    return isLoading ?  (<Spinner />):(<section className='cards'>
        {
            items.map((item) => (
                <ProductItem key={item.char_id} item={item}></ProductItem>
                // <h1>{item.title}</h1>
            ))
        }
    </section>)
}

export default ProductGrid