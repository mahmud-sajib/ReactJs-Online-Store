import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import {Link} from 'react-router-dom'
import "./favoriteitem.css"

function FavoriteItem({item}) {
    // consuming contexts
    const {removeFromFavorite} = useContext(StateContext)

    // render JSX
    return (
        <div className="wishlist-detail">
            <div className="product-info-col">
                <img src={item.url} alt="product" />
                <h5>{item.title}</h5>
                <h5>$ {item.price}</h5>
            </div>
            <div className="product-qty-col">
                <Link to={`/product/${item.id}`}>
                    <button className="view-detail-btn">
                        View Details
                    </button>
                </Link> 
            </div>
            <div className="product-counter-col">
                <button onClick={() => removeFromFavorite(item.id)}>
                    <i className="ri-dislike-line"></i> 
                    <span className="undofavorite-text">Remove from Favorite</span>
                </button>
            </div>  
        </div>
    )
}

export default FavoriteItem
