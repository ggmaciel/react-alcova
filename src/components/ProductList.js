import React from 'react'
import Product from './Product'
import {useProduct} from '../Context/ProductContext'


export default function ProductList() {
    const {products, setProducts} = useProduct()
    
    const data = products.map(product => {
        return <Product  product={product} key={product.id}/>
    })

    
    return (
        <div className="step-container">
            <div className="step-row">
                <h1 className="shop-title">Our Products</h1>
                <div className="product-card">
                    {data}
                </div>
            </div>
        </div>
    )
}
