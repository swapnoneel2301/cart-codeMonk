import React ,{useState,useContext, useEffect} from 'react';
import OrderSummary from './OrderSummary';
import AddressDetails from './AddressDetails';
import CartDesktop from './CartDesktop';
import CartMobile from './CartMobile';
import data from '../data.json';

const CartContext = React.createContext();



export default function Cart(){
    const [products,setProducts] = useState(JSON.parse(localStorage.getItem('products')) || data.products.map((product)=>{
         return {...product,quantity:0};
    }));
    const [pincode,setPincode] = useState(localStorage.getItem('pincode')||'560067');

    const changeQuantity = (id,amount)=>{
          setProducts(prevProducts=>{
            const newProducts = prevProducts.map(product=>{
                 const {quantity} = product;
                 if(product.id===id) return {...product,quantity:quantity+amount};
                 return product;
            });
            return newProducts;
          })
    }

    const deleteItem = (id)=>{
        setProducts(prevProducts=>{
            const newProducts = prevProducts.filter(product=>{
                return product.id!==id;
            });
            return newProducts;
        })
    }

    useEffect(()=>{
       localStorage.setItem('products',JSON.stringify(products));
    },[products]);

    useEffect(()=>{
      localStorage.setItem('pincode',pincode);
    },[pincode])

    return (
        <CartContext.Provider value={{products,setProducts,
                                      pincode,setPincode,
                                      changeQuantity,deleteItem}}>
            <div> 
                    <CartDesktop />
                    <CartMobile />
                    <div className='row justify-content-between m-auto'>
                        <AddressDetails />
                        <OrderSummary />
                    </div>
                    <div className='row justify-content-center justify-content-sm-end align-items-center text-center text-sm-end mb-3'>
                        <div className='col-12 col-sm-3 mb-3'>
                            <a href='#' className='text-decoration-none fw-bold' style={{'color':'#000080'}}>Continue Shopping</a>
                        </div>
                        <div className='col-12 col-sm-3'>
                            <button className='btn btn-primary color-white rounded-pill' style={{'backgroundColor':'#000080'}}>Checkout</button>
                        </div>
                    </div>
            </div>
        </CartContext.Provider>
    );
}

export const useCartContext = ()=>{
    return useContext(CartContext);
}



