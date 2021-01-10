import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import {useParams} from 'react-router-dom'

function ProductDetail() {
    // consuming contexts
    const {addToCart} = useContext(StateContext)

    // get id of current product
    const {productId} = useParams()

    // fetch all products data
    const {products} = useContext(StateContext)
    
    // filter the product with matching id
    const thisProduct = products.filter(product => product.id === productId)
    
    // render JSX
    return (
        // map all information of that specific product
        <section>
            {
                thisProduct.map(product => {
                    return(
                        <div key={product.id} className="product-detail">
                            <div className="product-detail-image">
                                <img src={product.url} alt="product" />
                            </div>
                            <div className="product-detail-info">
                                <h3>{product.title}</h3>
                                <h4>${product.price}</h4>
                                <p className="lead">{product.description}</p> 
                                
                                <button onClick={() => addToCart(product)} className="add-cart-btn">Add to Cart</button> 
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ProductDetail
