import React from 'react';
import minusActive from '../icon/minus-active.png';
import minus from '../icon/minus.png';
import plus from '../icon/plus.png';
import DELETE from '../icon/DELETE.png';
import Earphone from '../Images/Earphone.png';
import phone from '../Images/phone.png';
import stick from '../Images/stick.png';
import { useCartContext } from './Cart';

const Images = [Earphone,phone,stick];

export default function CartDesktop(){
  
    const {products,changeQuantity,deleteItem} = useCartContext();

    return (
        <table className='table text-center d-none d-sm-table'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,idx)=>{
                            const {id,name,price,quantity,desc,tagline,planLink,gift} = product;
                            return(
                                    <tr key={id}>
                                        <td className='row'>
                                            <div className='col-md-4'>
                                                <img src={Images[idx%3]}></img>
                                            </div>
                                            <div className='col-md-4 text-start'>
                                                <div className='bg-warning w-75 rounded shadow mb-2'>{tagline}</div>
                                                <div className='fs-5'>{name}</div>
                                                <div className='text-secondary'>
                                                    {desc}  
                                                    {planLink && <a className='text-decoration-none' target="_blank" href={planLink}> View Plans</a>}
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td>{name}</td> */}
                                        <td>{price} $</td>
                                        <td>
                                            {
                                            quantity>0 ?
                                            <button className='btn shadow-none' onClick={()=>changeQuantity(id,-1)}>
                                                <img src={minusActive}></img>
                                            </button>
                                            :
                                            <button className='btn' disabled>
                                                <img src={minus}></img>
                                            </button>
                                            }
                                            {quantity}
                                            <button className='btn shadow-none' onClick={()=>changeQuantity(id,1)}>
                                                <img src={plus}></img>
                                            </button>
                                        </td>
                                        <td>
                                            {price*quantity} $
                                        </td>
                                        <td className='d-none d-sm-table-cell'>
                                                <button className='btn shadow-none' onClick={()=>deleteItem(id)}>
                                                    <img src={DELETE}></img>
                                                </button>
                                        </td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    )
}