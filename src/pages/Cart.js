import React, {useContext} from 'react'
import CartItem from '../components/CartItem/CartItem'
import { StateContext } from '../context/GlobalState'

function Cart() {
    // consuming contexts
    const {total, cartItems, totalItems, resetCart, checkOutCart} = useContext(StateContext)
    
    // render JSX
    return (
        <>
        <section className="cart-section">
            {
                cartItems.map((item) => <CartItem key={item.id} item={item}/>)
            }
            
            <div className="summary-detail">
                <div className="items">
                    {
                       totalItems===0 ? <h4 className="warn-txt">No Item in Cart!</h4>:
                       <h4>Total Items: {totalItems}</h4>
                    }
                    
                </div>
                <div className="amounts">
                    <h4>Total Amount: {total}</h4>
                </div>
                {
                  totalItems>0 &&   
                  <button onClick={()=>checkOutCart()} className="checkout">Checkout</button>
                }
                {
                  totalItems>0 && 
                  <button onClick={()=>resetCart()} className="reset">Reset</button>
                }
            </div>
        </section>
        </>
    )
}

export default Cart
