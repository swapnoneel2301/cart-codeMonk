import React, { useEffect, useState } from 'react'; 
import data from '../data.json';
import { useCartContext } from './Cart';

export default function OrderSummary(){

    const {products,pincode} = useCartContext();

    const minTotal = data.discount?.minTotal;
    const discountPercentage = data.discount?.discountPercentage;
    const {pincode:allPincode} = data;

    const [noItems,setNoItems] = useState(0);
    const [subTotal,setSubTotal] = useState(0);
    const [discount,setDiscount] = useState(0);


    const updateAllstates = ()=>{
        // update no of Items
        const newNoItems = products.reduce((acc,product)=>{
           return acc+ Number(product.quantity);         
        },0);
        setNoItems(newNoItems);
        // update subtotal
        const newSubTotal = products.reduce((acc,product)=>{
           return acc + (Number(product.price)*Number(product.quantity));
        },0);
        setSubTotal(newSubTotal);

        // update discount
        const newDiscount = (minTotal!==undefined && discountPercentage!==undefined && newSubTotal>=minTotal) ? Math.floor((newSubTotal*discountPercentage)/100) : 0;
        setDiscount(newDiscount);
    }

    useEffect(()=>{
        updateAllstates();
    },[]);

    useEffect(()=>{
       updateAllstates();
    },[products]);
    

    
    return (
        <div className='col-md-5 mb-5 mt-2 p-3 rounded shadow'>
            <h5>Order Summary ({noItems} items)</h5>
            <hr className='border border-dark'></hr>
            <div className='row justify-content-between text-secondary fw-bold'>
                <div className='col-auto'> Subtotal </div>
                <div className='col-auto'>{subTotal} $ </div>
            </div>
            <div className='row justify-content-between text-secondary fw-bold'>
                <div className='col-auto'>Total Discount</div>
                <div className='col-auto text-dark'>-{discount} $</div> 
            </div>
            <div className='row justify-content-between text-secondary fw-bold'>
                <div className='col-auto'>Standard Shipping</div>
                <div className='col-auto'>
                    {allPincode[pincode]?.deliveryPrice>0 ? `${allPincode[pincode]?.deliveryPrice} $`: 'Free'}
                </div>  
            </div>
            <div className="row justify-content-between text-secondary fw-bold">
                <div className='col-auto'>Order Total</div>
                <div className='col-auto'>
                    <h4 className='ms-5 text-dark'>{subTotal-discount+allPincode[pincode]?.deliveryPrice} $</h4>
                </div>
            </div>
        </div>
    )
}