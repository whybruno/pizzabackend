import React from 'react';
import moreIcon from '../../assets/icons/more.png';
import lessIcon from '../../assets/icons/less.png';

function Order({ orderItems, onUpdateQuantity }) {
  const handleIncrement = (event, index) => {
    event.preventDefault(); // Avoid default link behavior
    onUpdateQuantity(index, orderItems[index].qty + 1);
  };

  const handleDecrement = (event, index) => {
    event.preventDefault(); // Avoid default link behavior
    const newQty = Math.max(0, orderItems[index].qty - 1); // Ensures quantity is not less than zero
    onUpdateQuantity(index, newQty);
  };

  return (
    <div className='container-fluid px-5 py-5' id="Order">
      <div className='row mb-4 ps-md-5 ps-lg-0'>
        <h2 className='display-5 fw-bold'>Your Order</h2>
      </div>
      <div className='row px-md-5 px-lg-0 row-cols-1'>
        {orderItems.map((pizza, index) => (
        <div className="col my-3" key={index}>
          <div className="card d-flex flex-md-row flex-lg-column flex-xl-row rounded-3 border border-3 border-dark">
            <div className="card-header border-end border-3 border-dark p-4">
              <img src={pizza.imageUrl} className='img-fluid' width={120} alt='' />
            </div>
            <div className="card-body p-4 pb-2 border-dark">
              <div className='d-flex text-start justify-content-between align-items-start'>
                <div className=''>
                  <h3 className='fw-bold color-2'>{pizza.productName}</h3>
                  <p className="card-title fs-6 fw-bold pizza-size-checkout color-2">SIZE: <span className='color-1'>{pizza.selectedSize}</span></p>
                </div>
                <div className='d-flex gap-5'>
                  <div className='d-flex gap-3'>
                    <p className="card-title fs-5 fw-bold pizza-qty-checkout color-2">QTY: <span className='color-1'>{pizza.qty}</span></p>
                    <a id={`moreQty-${index}`} href="#" onClick={(event) => handleIncrement(event, index)}><img src={moreIcon} alt="" /></a>
                    <a id={`lessQty-${index}`} href="#" onClick={(event) => handleDecrement(event, index)}><img src={lessIcon} alt="" /></a>
                  </div>
                </div>
              </div>
              <div className='d-flex flex- justify-content-between text-start'>
                <p className='fs-5 mt-3 color-1'>{pizza.ingredients.join(', ')}</p>
                <h3 className='fs-1 fw-bold color-1'>£{pizza[pizza.selectedPrice]}</h3>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Order;