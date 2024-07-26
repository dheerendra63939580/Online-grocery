import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'
const Cart = () => {
    let totalPrice = 0;
    const storeData = useSelector(state => state.product);
    let result = storeData.reduce((acc, obj) => {
        let found = acc.find(item => item.name === obj.name);
      
        if (found) {
          found.count++;
          totalPrice += found.price;
        } else {
          acc.push({ name: obj.name, count: 1,price: obj.price });
          totalPrice += obj.price;
        }
      
        return acc;
      }, []);
      

  return (
    <div>
          {
            totalPrice>0?<div><table className='table'>
            <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
            {
               result.map(value=>(
                    <tr className="a">
                        <td>{value.name}</td>
                        <td>{value.count}</td>
                        <td>{value.price * value.count}</td>
                    </tr>
               )) 
            }
        </table>
        <div style={{display: "flex", justifyContent: "space-between",marginTop: "10px" }}>
        <span>Total: INR{totalPrice}</span>
        <button>Proceed to Pay</button>
        </div></div>:<span>Cart is empty.</span>
          }
    </div>
  )
}

export default Cart
