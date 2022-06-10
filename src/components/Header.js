import React from 'react';
import logo from '../Images/logo.png';
import user from '../icon/user.png';
import shopping from '../icon/shopping.png';
import {BsSearch} from 'react-icons/bs';
import data from '../data.json';

const {discount} = data;

export default function Header(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{'backgroundColor':'#000080'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo}></img>
                    </a>
                    <div id="navbarSupportedContent">
                        <div className="d-flex text-white align-items-center">
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button> */}
                            <div className='border-end pe-2'>Track Order</div>
                            <BsSearch className='mx-3' />
                            <img src={user} className=''></img>
                            <img src={shopping} className=''></img>
                        </div>
                    </div>
                </div>
            </nav>
            {
                discount &&
                <div className="alert alert-primary w-75 m-auto text-center my-4 d-none d-sm-block" role="alert">
                   Shop for ${discount?.minTotal} or more and get {discount.discountPercentage}% discount on your order
                </div>
            }
        </>
    )
}