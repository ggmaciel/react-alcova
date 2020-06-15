import React, {useState, useEffect} from 'react'
import {useCart} from '../../Context/ProductContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useCartSubTotal, useCartTax, useCartTotal } from '../../Context/ProductContext'


export default function CartData(product) {
    const {cart, setCart} = useCart()
    const {cartSubTotal, setCartSubTotal} = useCartSubTotal()
    const {cartTax, setCartTax} = useCartTax()
    const {cartTotal, setCartTotal} = useCartTotal()
    const {title, img, price, inCart, total,id} = product.product
    const phone = product.product
    const [count, setCount] = useState(phone.count)
    const [open, setOpen] = useState(true)
    const [open2, setOpen2] = useState(true)
    const element = <FontAwesomeIcon icon={faTrashAlt} />


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


    function Increment () {
        setCount(phone.count = phone.count + 1)
        setCartTotal(cartTotal + (phone.price * 5 + phone.price))
        setCartSubTotal(cartSubTotal + phone.price)
        setCartTax(cartTax + (phone.price * 5))
    }


    function Decrement () {
        if(count <= 1) {
            let remove = cart.filter(x => {
                return x.id != id;
            })
            setCart(remove)
            phone.count = 0
            phone.inCart = false
            setCartSubTotal(cartSubTotal - (phone.price * count))
            setCartTax(cartTax - ((phone.price * count) * 5))
            setCartTotal(cartTax - (phone.price * 5) + (cartSubTotal - phone.price))
        } else {
            setCount(phone.count -= 1)
            setCartSubTotal(cartSubTotal - phone.price)
            setCartTax(cartTax - (phone.price * 5))
            setCartTotal(cartTax - (phone.price * 5) + (cartSubTotal - phone.price))
        }
    }


    function Remove() {
        let remove = cart.filter(x => {
            return x.id != id;
        })
        setCart(remove)
        phone.inCart = false
        setCartSubTotal(cartSubTotal - (phone.price * count))
        setCartTax(cartTax - ((phone.price * count) * 5))
        setCartTotal(cartTotal - ((phone.price * phone.count) + (phone.price * phone.count * 5)))
        phone.count = 0
    }

    
    return (
        <div className={open,open2 ? "cart-row" : "cart-row-resize"}>
            <div className={open,open2 ? "data-col" : "data-col-resize"}>
                <img src={img} alt="product in cart"/>
            </div>
            <div className={open,open2 ? "data-col" : "data-col-resize"}>
                <span className="cart-product-name">{title}</span>
            </div>
            <div className={open,open2 ? "data-col" : "data-col-resize"}>
                ${price}
            </div>
            <div className={open,open2 ? "data-col" : "data-col-resize"}>
                <button onClick={Decrement} className="cart-btn">
                    -
                </button>
                <button className="cart-btn">
                    {count}
                </button>
                <button onClick={Increment} className="cart-btn">
                    +
                </button>
            </div>
            <div className={open,open2 ? "data-col" : "data-col-resize"}>
                    <span onClick={Remove} className="trash-icon">{element}</span>
            </div>
            <div className={open,open2 ? "data-col" : "data-col-resize"}>
                ${phone.price * count}
            </div>
        </div>

    )
}
