import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

const Cart = (props) => {

    const cart = props.cart;

    let total = 0;
    for (let i = 0;i<cart.length;i++){
        const  product = cart[i];
        total = total + product.price;
    }

    return (
        <div>
           <h3>Total </h3>
            <p>Course orderd {cart.length}</p>
            <p>price : {total}</p>
            <p>discount : 0</p>
            <p>total : {total}</p>

        </div>
    );
};

export default Cart;
