import React from 'react'
import {Link} from 'react-router-dom'
import {useModalOpen} from '../Context/ProductContext'
import {useModalProduct} from '../Context/ProductContext'



export default function Modal() {
    const {modalOpen, setModalOpen} = useModalOpen()
    const {modalProduct, setModalProduct} = useModalProduct()



    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div>
            {modalOpen ? 
                <div className="modal-container">
                    <div className="modal">
                        <h1>Item added to cart</h1>
                            <img src={modalProduct.img} alt="modal-product" />
                            <h2>{modalProduct.title}</h2>
                            <h3>Price: $ {modalProduct.price}</h3>
                            <Link to="/shop">
                                <button 
                                    className="modal-btn"
                                    onClick={closeModal}
                                >
                                    Continue Shopping
                                </button>
                            </Link>
                            <p></p>
                            <Link to="/cart">
                                <button 
                                    className="modal-btn2"
                                    onClick={closeModal}
                                >
                                    Go To Cart
                                </button>
                            </Link>
                    </div>
                </div>
                //modalOpen false
                : null
            }
        </div>
    )
}
