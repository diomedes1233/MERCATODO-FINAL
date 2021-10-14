import React from 'react'

const ProductItem = ({product}) => {
    return (
        <div className="col-md-4">
            <div className="card card-body">
                <h3 className="card-title">{product.name}</h3>
            </div>
        </div>
    )
    
}

export default ProductItem
