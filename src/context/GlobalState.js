import React, {useState, useEffect} from "react"
import Swal from 'sweetalert2'

// creating `context`
const StateContext = React.createContext()

function StateProvider({children}){
    // defining `state` for our product data
    const [products, setProducts] = useState([])
    // defining `state` for our cart data
    const [cartItems, setCartItems] = useState([])
    // defining `state` for calculating total amount
    const [total, setTotal] = useState(0);
    // defining `state` for counting total items in
    const [totalItems, setTotalItems] = useState(0);
    // defining `state` for favorite product data
    const [favoriteItems, setFavoriteItems] = useState([])

    // fetching product data
    const url = "https://raw.githubusercontent.com/mahmud-sajib/ecommerce-store-product-data/master/data.json"
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json()) // get json data from api
        .then(data => setProducts(data)) // save data to `state` 
    }, [])

    // calculate cart quantity
    function calcQuantity() {
        const totalQty = cartItems.reduce((total, product) => total + product.quantity, 0)
        setTotalItems(totalQty)
    }

    // addToCart button functionality
    function addToCart(product){
        // check if the newly added product is already in cart by getting it's index
        const index = cartItems.findIndex(item => item.id === product.id);
        // if index not found push it to cart & set quantity to 1 else update the quantity only
        if(index === -1){
            cartItems.push({...product, quantity:1})   
        } else {
            cartItems[index].quantity += 1 
        }
        // update cart quantity
        calcQuantity()  
    }

    // removeFromCart button functionality
    function removeFromCart(product){
        // remove product from cart
        cartItems.pop(product)
        // update cart quantity
        calcQuantity()
    }

    // counter increase button functionality
    function increaseCount(id) {
        // check if the newly added product is already in cart by getting it's index
        const index = cartItems.findIndex(item => item.id === id);
        // increase the quantity by 1 
        cartItems[index].quantity += 1
        // update cart quantity
        calcQuantity()
    }

    // counter decrease button functionality
    function decreaseCount(id) {
        // check if the newly added product is already in cart by getting it's index
        const index = cartItems.findIndex(item => item.id === id);
        // decrease the quantity by 1
        cartItems[index].quantity -= 1
        // update cart quantity
        calcQuantity()
    }

    // addToFavorite button functionality
    function addToFavorite(newItem){
        setFavoriteItems(prevItems => [...prevItems, newItem])
    }

    // removeFromFavorite button functionality
    function removeFromFavorite(id){
        setFavoriteItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function resetCart() {
        setCartItems([])
        setTotalItems(0)
    }

    function checkOutCart() {
        resetCart()
        Swal.fire(
            'Congrats!',
            'You successfully placed an order!',
            'success'
        )
    }

    
    useEffect(() => {
        // calculate total bill
        const totalPrices = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
            setTotal(totalPrices);

    }, [totalItems, cartItems])
    
    return(
        <StateContext.Provider value={{products, total, totalItems, cartItems, addToCart, removeFromCart, favoriteItems, addToFavorite, removeFromFavorite, increaseCount, decreaseCount, resetCart, checkOutCart}}>
            {children}
        </StateContext.Provider>
    )
}

export {StateContext, StateProvider}