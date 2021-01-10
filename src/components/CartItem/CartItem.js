import React,{useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import './cartitem.css'

function CartItem({item}) {
    // consuming contexts
    const {increaseCount, decreaseCount, removeFromCart} = useContext(StateContext)

    // dteremine whether decrease or remove button to display
    function decreaseButton() {
        if(item.quantity === 1){
            return (
                <button onClick={() => removeFromCart(item)}>
                    <i className="ri-delete-bin-line"></i>
                </button>
            )
                
        } else {
            return (
                <button onClick={() => decreaseCount(item.id)}>
                    <i className="ri-arrow-down-circle-line"></i>
                </button> 
            )
        }
    }

    // render JSX
    return (
        <div className="cart-detail">
            <div className="product-info-col">
                <img src={item.url} alt="product" />
                <h5>{item.title}</h5>
                <h5>$ {item.price}</h5>
            </div>
            <div className="product-qty-col">
                Qty: {item.quantity}
            </div>
            <div className="product-counter-col">
                <button onClick={() => increaseCount(item.id)}>
                    <i className="ri-arrow-up-circle-line"></i>
                </button>
                <br/>
                {/* decrease or remove button */}
                {decreaseButton()}
                    
            </div>
        </div> 
    )
}

export default CartItem
