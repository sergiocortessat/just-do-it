import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {deleteProduct} from './Redux/Actions'


const Basket = ({products = [], onDelete = Function, totalSum= 0}) => {
    const items = useSelector((state) => state.product);
    const dispatch = useDispatch();
    products = items.products;
    totalSum = items.totalSum;

    onDelete = (product) => {
        dispatch(deleteProduct(product));
    }
    return (
        <div>
            {products && products.map(product => (
                <div key={product.id}>
                    <span>Item: {product.item}</span>
                    <span>Price: {product.price}</span>
                    <button onClick={() => onDelete(product)}>Delete entry</button>
                </div>
            ))}
            <div>
                <p>Total sum of products: {totalSum}</p>
            </div>
        </div>
    )
}

export default Basket;