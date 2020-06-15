import React, {useState, useEffect} from 'react'
import {useDetail} from '../Context/ProductContext'
import {Link} from 'react-router-dom'
import {useCart} from '../Context/ProductContext'
import {useModalOpen} from '../Context/ProductContext'


export default function Details() {
    const {detail, setDetail} = useDetail()
    const {id, company, img, info, price, inCart, title} = detail
    const [open, setOpen] = useState(true)
    const [open2, setOpen2] = useState(true)
    const {cart, setCart} = useCart()
    const {modalOpen, setModalOpen} = useModalOpen()

    
    useEffect(() => {
        window.addEventListener('resize', resize); 

        //Onload check innerWidth
        const loadOpen = window.innerWidth;
        if (loadOpen < 1050) {
            setOpen2(false)
        } else if (loadOpen > 1050){
            setOpen2(true)
        }

        //On Resize check innerWidth
        function resize() {
            const width = window.innerWidth;
    
            if (width < 1050) {
                setOpen(false)
            } else if (width > 1050) {
                setOpen(true)
            }
        }
    })


    function addToCart() {
        setModalOpen(true)
    }


    return (
       <div>
            <div className="detail-container">
               <div className="detail-title">
                   <h1>{title}</h1>
               </div>

               <div className="detail-colum">
                    <div className={open,open2 ? "col-left" : "col-left2"}>
                        <img src={img}></img>
                    </div>
                    <div className={open,open2 ? "col-right" : "col-right2"}>
                        <h2>Model: {title}</h2>
                        <h4>Made by: {company}</h4>
                        <h2>Price: {price}</h2>
                        <h4>Some info about product:</h4>
                            <p>{info}</p>
                    </div>
               </div>
               <div>
                   <Link to="/">
                    <button  className="detail-btn">
                        Back to Products
                    </button>
                   </Link>
                   <button 
                    className={`detail-btn ${inCart ? "" : "hide"}`}
                    onClick={addToCart}
                   >
                        {inCart ? "inCart" : "Add to Cart"}
                    </button>
               </div>
        </div>
       </div> 
    )
}
