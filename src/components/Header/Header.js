import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
    // consuming context
    const {totalItems, favoriteItems} = useContext(StateContext)

    // render JSX
    return (
        <nav>
            <div className="logo">
                <Link to='/'>Island Tees</Link>
            </div>
            <ul className="nav-items">
                <li><Link to='/'>Store</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <ul className="nav-icons">
                <li>
                    <Link to='/wishlist'>
                        <i className="ri-heart-2-line"></i>
                        <span className="item-count">{favoriteItems.length}</span> 
                    </Link>
                </li>
                <li> 
                    <Link to='/cart'>
                        <i className="ri-shopping-basket-2-line"></i>
                        <span className="item-count">{totalItems}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
