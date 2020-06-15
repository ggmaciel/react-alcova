import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {useDetail} from '../Context/ProductContext'
import {useCart} from '../Context/ProductContext'
import {useModalOpen} from '../Context/ProductContext'
import {useModalProduct} from '../Context/ProductContext'
import { useCartSubTotal, useCartTax, useCartTotal } from '../Context/ProductContext'


export default function Product(product) {
    const {title, img, price, inCart,id, total, count} = product.product
    const phone = product.product
    const {detail, setDetail} = useDetail()
    const {cart, setCart} = useCart()
    const {modalOpen, setModalOpen} = useModalOpen()
    const {modalProduct, setModalProduct} = useModalProduct()
    const {cartSubTotal, setCartSubTotal} = useCartSubTotal()
    const {cartTax, setCartTax} = useCartTax()
    const {cartTotal, setCartTotal} = useCartTotal()
    const element = <FontAwesomeIcon icon={faShoppingCart} />


    function handleDetail() {
       setDetail(phone)
    }

    function addToCart() {
            //If product is in cart, only open the modal
        const exists = cart.find(function(contact) {
            return contact.title == title
        })
        if(exists) {
            setModalOpen(true)
        } else {
            //Updater function to update array from cart pushing the new object from phone
            setCart([...cart, phone])
            phone.count = 1
            setDetail(phone.inCart = true)
            setModalProduct(phone)
            setModalOpen(true)
            setCartSubTotal(cartSubTotal + phone.price * phone.count)
            setCartTax(cartTax+(phone.price * phone.count) * 5)
            setCartTotal(cartTotal+(phone.price * phone.count) + ((phone.price * phone.count) * 5))
        }
    }


    return (
            <div className="product-body">
                <div className="product-square">
                    <Link onClick={handleDetail} to={`/details`}>
                        <img src={img} alt="product-available" className="link-image"/>
                    </Link>
                    <button  onClick={addToCart} className={`product-btn`}>
                        {phone.inCart ? <span className="cart-icon">{element}</span> : "Buy"}
                    </button>
                </div>
                <div className="product-title">
                        {title}
                        <h3 className="product-price">${price}</h3>
                </div>
            </div>
    )
}

