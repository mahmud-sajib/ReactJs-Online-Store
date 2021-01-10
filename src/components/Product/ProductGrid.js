import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import ProductItem from './ProductItem'
import './product.css'


function ProductGrid() {
    const {products} = useContext(StateContext)
    
    return(
        <section className="products">
            {
                products.map((product) => <ProductItem key={product.id} product={product}/>)
            }
        </section>
    ) 
}

export default ProductGrid
