import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const cartData = useLoaderData()[0];
    return (
        <div>
            <h1>{cartData.name.common}</h1>
            <img src={cartData.flags.png} alt="" />
        </div>
    );
};

export default Cart;