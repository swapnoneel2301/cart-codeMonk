import React from 'react';
import phone from '../icon/phone.png';

export default function Footer(){
    return(
        <div className='row bg-dark text-white text-center p-5'>
           <div className='col-12 border-bottom d-none d-sm-block'>
               <div className='row pb-3'>
                   {/* col 1 */}
                   <div className='col-8 border-end'>
                      <div className='row justify-content-start'>
                            <div className='col-auto px-5'>
                                <h4>Lorem</h4>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                            </div>
                            <div className='col-auto px-5 d-none d-md-block'>
                                <h4>Lorem</h4>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                            </div>
                            <div className='col-auto px-5 d-none d-md-block'>
                                <h4>Lorem</h4>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                            </div>
                            <div className='col-auto px-5'>
                                <h4>Lorem</h4>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                                <div>Dummy Text</div>
                            </div>
                     </div>
                       
                   </div>
                   {/* col 2 */}
                   <div className='col-4 px-5 pb-4 text-start'>
                      {/* <h3>col2</h3> */}
                      <h5>Call Us</h5>
                      <div className='row'>
                        <div className='col-5'>
                            Monday - Friday <br/>
                            8am - 9pm CST
                        </div>
                        <div className='col-5 p-0'>
                            Saturday & Sunday <br/>
                            10am - 6pm CST
                        </div>
                      </div>
                      <div className='mt-3 row justify-content-start align-items-center'>
                        <div className='col-1 pe-0'>
                            <img className='' src={phone}></img>
                        </div>
                        <h3 className='col-11'>1800-123-1234</h3>
                      </div>
                      <hr/>
                      <h4 className='fw-light'>support.us@test.com</h4>
                   </div>
               </div>
           </div>
           <div className='col-12 text-center text-sm-end pt-3'>
               <div className='mb-3'>Dummy | Dummy | Dummy | Dummy</div>
               <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
           </div>
        </div>
    )
}