import React ,{useState} from 'react';
import data from '../data.json';
import LOCATION from '../icon/LOCATION.png';
import check from '../icon/check.png';
import { ImCross } from 'react-icons/im';
import {FcOk} from 'react-icons/fc';
import { useCartContext } from './Cart';

export default function AddressDetails(){

    const {pincode,setPincode} = useCartContext();

    const {pincode:allPincode} = data;
    
    let pincodeArray = [];
    for(const pincode in allPincode){
        pincodeArray.push({pincode,...allPincode[pincode]});
    }
    // console.log(pincodeArray);
    // console.log(allPincode);
    return (
        <div className='col-md-6 mb-5 mt-2 p-3 rounded shadow'>
            <h5>Delivery Availability - 
                <img src={LOCATION}></img>
                {pincode}
            </h5>
            <select defaultValue={localStorage.getItem('pincode')} 
                    onChange={(e)=>setPincode(e.target.value)}
                    className="form-select form-select-sm w-50" aria-label=".form-select-sm example">
                {
                    pincodeArray.map((details)=>{
                        return  <option key={details.pincode} value={details.pincode}>{details.pincode}</option>
                    })
                }
            </select>
            <hr className='border border-dark border-2'></hr>
            {
                pincode &&
                <div className='row justify-content-between'>
                    <div className='col-sm-4'>
                        <div className='row'>
                            <div className='col-2'>
                                {allPincode[pincode].deliveryPrice===0 ? <FcOk className='me-2'/> : <ImCross className='me-2'/>}
                            </div>
                            <div className='col-10'>Free delivery</div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='row'>
                            <div className='col-2'>
                                {allPincode[pincode].cashOnDelivery ? <FcOk className='me-2'/> : <ImCross className='me-2'/>}
                            </div>
                            <div className='col-10'>Cash on delivery</div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                         <div className='row'>
                            <div className='col-2'>
                               <FcOk className='me-2'/>
                            </div>
                            <div className='col-10'>
                                Estimated delivery time is  
                                <span className='fw-bold'> {allPincode[pincode].estimatedDays.min}</span> - 
                                <span className='fw-bold'> {allPincode[pincode].estimatedDays.max}</span> days
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
}