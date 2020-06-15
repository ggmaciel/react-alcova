import React from 'react'
import {Link} from 'react-router-dom'

export default function FirstPage() {
    return (
        <div className="first-page-container">
            <Link to="/shop">
                    <button className="first-page-btn">
                        Shop
                    </button>
            </Link>
        </div>
    )
}
