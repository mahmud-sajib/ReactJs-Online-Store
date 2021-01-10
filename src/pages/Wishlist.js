import React, {useContext} from 'react'
import FavoriteItem from '../components/FavoriteItem/FavoriteItem'
import { StateContext } from '../context/GlobalState'

function Wishlist() {
    // consuming contexts
    const {favoriteItems} = useContext(StateContext)
    
    return (
        <section className="wishlist-section">
            {
                favoriteItems.map(item => <FavoriteItem key={item.id} item={item} />)
            }
        </section>
    )
}

export default Wishlist
