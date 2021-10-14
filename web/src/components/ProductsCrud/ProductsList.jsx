import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import * as ProductServer from './ProductServer'

const ProductsList = () => {

    const [products, setProducts] = useState([1,2,3]) 

    const listProducts = async() => {

        try{
            const res = await ProductServer.listProducts()
            const data = await res.json()
            setProducts(data.products)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {

        listProducts()

    }, [])

    return (
        <div className="row">
            {products.map((product) => (
                
                <ProductItem key={product.id} product={product}/>

            )),
            console.log(products)}
        </div>
    )

}

export default ProductsList
