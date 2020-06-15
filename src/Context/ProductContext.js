import React, { createContext, useState, useContext, useEffect } from 'react'
import {storeProducts} from '../data'
import {detailProduct} from '../data'


const PhoneContext = createContext();

export default function PhoneProvider({children}) {
    const [products, setProducts] = useState([])
    const [detail, setDetail] = useState(detailProduct)
    const [cart, setCart] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [modalProduct, setModalProduct] = useState([])
    const [cartSubTotal, setCartSubTotal] = useState(0)
    const [cartTax, setCartTax] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)


    useEffect(() => {
            let tempProducts = []
            storeProducts.forEach(item => {
                const singleItem = {...item}
                tempProducts = [...tempProducts, singleItem]
                setProducts(tempProducts)
            })
    }, [])

    return (
        <PhoneContext.Provider value={{
            products, setProducts,
            detail, setDetail,
            cart, setCart,
            modalOpen, setModalOpen,
            modalProduct, setModalProduct,
            cartSubTotal, setCartSubTotal,
            cartTax, setCartTax,
            cartTotal, setCartTotal
        }}>
            {children}
        </PhoneContext.Provider>
    )
}

export function useProduct() {
    const context = useContext(PhoneContext)
    const {products, setProducts} = context
    return {products, setProducts}
}

export function useDetail() {
    const context = useContext(PhoneContext)
    const {detail, setDetail} = context
    return {detail, setDetail}
}

export function useCart() {
    const context = useContext(PhoneContext)
    const {cart, setCart} = context
    return {cart, setCart}
}

export function useModalOpen() {
    const context = useContext(PhoneContext)
    const {modalOpen, setModalOpen} = context
    return {modalOpen, setModalOpen}
}

export function useModalProduct() {
    const context = useContext(PhoneContext)
    const {modalProduct, setModalProduct} = context
    return {modalProduct, setModalProduct}
}

export function useCartSubTotal() {
    const context = useContext(PhoneContext)
    const {cartSubTotal, setCartSubTotal} = context
    return {cartSubTotal, setCartSubTotal}
}

export function useCartTax() {
    const context = useContext(PhoneContext)
    const {cartTax, setCartTax} = context
    return {cartTax, setCartTax}
}

export function useCartTotal() {
    const context = useContext(PhoneContext)
    const {cartTotal, setCartTotal} = context
    return {cartTotal, setCartTotal}
}





