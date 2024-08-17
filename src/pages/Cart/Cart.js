import clsx from 'clsx';
import Styles from './Cart.module.scss';
import CartItem from '~/components/CartItem/CartItem';
import { useEffect, useState } from 'react';
import api from '~/ultils/Api/api';


const arrayItem = ["Product", "Price", "Quantity", "Total Amount", "Action"]

function Cart () {
    const [cartItems , setCartItems] = useState([]);
    useEffect ( () => {
        api.get('/api/CartItems')
        .then(res => setCartItems(res.data))

    }, [])
    const resetComponent = () => {
        api.get('/api/CartItems')
        .then(res =>  {setCartItems(res.data)
        })
    }
    return (
        <div className={clsx(Styles.wrap)}>
            <div className={clsx(Styles.container)}>
                <header className={clsx(Styles.header,)}>
                    <ul>
                        {arrayItem.map((item, index) => {
                            return (<li key={index} className={clsx( Styles.header_item)}>{item}</li>)
                        })}
                    </ul>
                </header>
                {cartItems.map((item, index) => {
                    return (<CartItem cartItem={item} key={index} resetComponent={resetComponent} />);
                })}
                
            </div>
        </div>
    )
}
export default Cart;