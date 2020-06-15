import React from 'react'
import { useCartSubTotal, useCartTax, useCartTotal } from '../../Context/ProductContext'
import {useCart} from '../../Context/ProductContext'
import {useProduct} from '../../Context/ProductContext'
import {storeProducts} from '../../data'


export default function CartTotals() {
    const {cartSubTotal, setCartSubTotal} = useCartSubTotal()
    const {cartTax, setCartTax} = useCartTax()
    const {cartTotal, setCartTotal} = useCartTotal()
    const {cart, setCart} = useCart()
    const {products, setProducts} = useProduct()


    function clearCart() {
        setCart([])
        setCartTotal(0)
        setCartTax(0)
        setCartSubTotal(0)
        let tempProducts = []
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
            setProducts(tempProducts)
        })
    }


    return (
        <div className="step-container">
            <div className="cart-total-row">
                <div className="cart-total">
                    <button className="total-btn" onClick={clearCart}>
                        <h3>Clear Cart</h3>
                    </button>
                    <h3>Subtotal: ${cartSubTotal}</h3>
                    <h3>Tax: R${cartTax}</h3>
                    <h3>Total: R${cartTotal}</h3>
                </div>
            </div>
        </div>
    )
}
