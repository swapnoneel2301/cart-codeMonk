import React from 'react';
import minusActive from '../icon/minus-active.png';
import minus from '../icon/minus.png';
import plus from '../icon/plus.png';
import Earphone from '../Images/Earphone.png';
import phone from '../Images/phone.png';
import stick from '../Images/stick.png';
import { useCartContext } from './Cart';

const Images = [Earphone,phone,stick];

export default function CartMobile(){

   const {products,changeQuantity}=useCartContext();
    
   return <div className='d-block d-sm-none bg-light rounded px-4 pt-4 w-100'>
        {
            products.map((product,index)=>{
                const {id,name,price,quantity,desc,tagline,planLink,gift}=product;
                return (
                        <div className='row mb-3' key={id} style={{'fontSize':'0.8em'}}>
                            <div className='col-5'>
                               <img className='bg-white p-2' src={Images[index%3]}></img>
                            </div>
                            <div className='col-6 text-start'>
                                 <div className='bg-warning w-75 rounded shadow mb-2'>{tagline}</div>
                                 <div className='fs-5'>{name}</div>
                                 <div className='text-secondary'>{desc}</div>
                                 <div className='text-secondary'>Qty: {quantity}</div>
                                 <div className='row'>
                                    <div className='col-6 fw-bold tex-start p-0 text-center'>{price} $</div>
                                    <div className='col-6 p-0'>
                                        <div className='row justify-content-center'>
                                            {
                                                quantity>0 ?
                                                   <div className='col-4'>
                                                        <button className='btn shadow-none p-0' style={{'fontSize':'0.5em'}} onClick={()=>changeQuantity(id,-1)}>
                                                            <img src={minusActive}></img>
                                                        </button>
                                                    </div>
                                                :
                                                   <div className='col-4'>
                                                        <button className='btn p-0' disabled>
                                                            <img src={minus}></img>
                                                        </button>
                                                    </div>
                                                
                                            }
                                            <div className='col-4 p-0 text-center' style={{'fontSize':'1.2em'}}>{quantity}</div>
                                            <div className='col-4 p-0'>
                                                <button className='btn shadow-none p-0' style={{'fontSize':'0.5em'}} onClick={()=>changeQuantity(id,1)}>
                                                    <img src={plus}></img>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                             </div>
                            <hr className='mt-3'></hr>
                        </div>
                )
            })
        }
   </div>
}