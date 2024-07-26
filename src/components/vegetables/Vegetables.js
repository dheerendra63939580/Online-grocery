import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obj } from '../../assets/data'
import { addItems, removeItem } from '../../reduxToolkit/slice'
const Vegetables = () => {
    const dispatch = useDispatch()
    const storeData = useSelector((state)=>state.product)
  return (
    <div className='product-container'> 
      {
        obj.vegetables.map((value)=>(
            <div className='product'>
                <img src = {value.image}/>
                <div className="justify-between">
                    <span>{value.name}</span>
                    <span>price: INR{value.price}/kg</span>
                </div>
                <div className='justify-between'>
                    <button onClick={()=>dispatch(addItems({name: value.name, price: value.price}))}>+</button>
                    {
                        storeData.find(val=> val.name === value.name)?<button onClick={()=>dispatch(removeItem({name: value.name, price: value.price}))}>-</button>:<span>{""}</span>
                    }
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Vegetables
