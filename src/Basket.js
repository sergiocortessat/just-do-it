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

    const headers = products[0] && Object.keys(products[0]);
    const content = products[0] && Object.values(products);
    return (
        <div>
        <table>
        <thead>
          <tr>
            {headers && headers.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
          <tbody>
            {content && content.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td><button onClick={() => onDelete(item)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
      </table>
            <div className="total-sum">
                <p>Total sum of products: {totalSum}</p>
            </div>
        </div>

        
    )
}

export default Basket;