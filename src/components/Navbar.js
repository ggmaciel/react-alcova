import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
 

export default function Navbar() {
    const element = <FontAwesomeIcon icon={faGithub} />

    return (
        <nav className="navbar">
            <Link to="/shop" className="link-style">
                <h1 className="navbar-logo">Alcova</h1>
            </Link>

                    <li className="nav-li">
                        <a  href="https://github.com/">
                            <span>{element}</span>
                        </a>
                    </li>

            <Link to="/cart" className="link-style">
                <button className="navbar-btn">
                    Cart
                </button>
            </Link>
        </nav>
    )
}
