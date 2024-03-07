import React, { useState } from 'react';
import Order from '../Order';
import Checkout from '../Checkout';
import Menu from '../Menu';

function OrderCheckout() {
  const [orderItems, setOrderItems] = useState([]);

  return (
    <div className='d-flex flex-column flex-lg-row gap-3'>
      <Order orderItems={orderItems} />
      <Checkout />
    </div>
  );
};

export default OrderCheckout;