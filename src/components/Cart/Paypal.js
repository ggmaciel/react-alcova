import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { useCartSubTotal, useCartTax, useCartTotal } from '../../Context/ProductContext'
import {useCart} from '../../Context/ProductContext'
import {useProduct} from '../../Context/ProductContext'
import { useHistory } from "react-router-dom";
import {storeProducts} from '../../data'


export default function Paypal() {
    const {cartSubTotal, setCartSubTotal} = useCartSubTotal()
    const {cartTax, setCartTax} = useCartTax()
    const {cartTotal, setCartTotal} = useCartTotal()
    const {cart, setCart} = useCart()
    const {products, setProducts} = useProduct()
    let history = useHistory();

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


    const onSuccess = (payment) => {
        // Congratulation, it came here means everything's fine!
                console.log("The payment was succeeded!", payment);
                clearCart()
                history.push('/shop')
                // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onCancel = (data) => {
        // User pressed "cancel" or close Paypal's popup!
        console.log('The payment was cancelled!', data);
        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onError = (err) => {
        // The main Paypal's script cannot be loaded or somethings block the loading of that script!
        console.log("Error!", err);
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    }
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        //let total = 1; // same as above, this is the total amount (based on currency) to be paid by using 

    const client = {
        sandbox:    process.env.REACT_APP_APP_ID,
        production: 'YOUR-PRODUCTION-APP-ID',
    }
    return (
        <div className="paypal">
                <PaypalExpressBtn 
                env={env} 
                client={client} 
                currency={currency} 
                total={cartTotal} 
                onError={onError} 
                onSuccess={onSuccess} 
                onCancel={onCancel} 
            />
        </div>
    )
}
