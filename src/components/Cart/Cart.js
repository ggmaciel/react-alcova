import React, {useState, useEffect} from 'react'
import CartData from './CartData'
import EmptyCart from './EmptyCart'
import CartColumns from './CartColumns'
import CartTotals from './CartTotals'
import {useCart} from '../../Context/ProductContext'


export default function Cart() {
    const {cart, setCart} = useCart()
    const [open, setOpen] = useState(true)
    const [open2, setOpen2] = useState(true)

    const data = cart.map(product => {
        return <CartData key={product.id} product={product}/>
    })

    useEffect(() => {
        window.addEventListener('resize', resize); 

        //Onload check innerWidth
        const loadOpen = window.innerWidth;
        if (loadOpen < 860) {
            setOpen2(false)
        } else if (loadOpen > 860){
            setOpen2(true)
        }

        //On Resize check innerWidth
        function resize() {
            const width = window.innerWidth;
            if (width < 860) {
                setOpen(false)
            } else if (width > 860) {
                setOpen(true)
            }
        }
    })

    

    return (
        <div className="step-container">
            {cart.length == 0 ? <EmptyCart /> 
            : 
            <div className="cart-container">
                <div className="step-row">
                    <h1 className="shop-title">Your Cart</h1>
                </div>
                {open,open2 ? <CartColumns /> : ""}
                    {data}
                <CartTotals />
            </div>
            }
        </div>
    )
}
