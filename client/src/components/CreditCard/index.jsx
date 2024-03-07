import React from 'react';
import contactLess from '../../assets/icons/contactless.png';
import masterCard from '../../assets/icons/mastercard.png';
import cardBackground from '../../assets/icons/cardbg.png';
import customersData from '../../customersData.json';

function CreditCard() {
  const divStyle = {
    backgroundImage: 'url("https://cdn.dribbble.com/users/6192980/screenshots/19861974/media/9e44d49dd622785e9670b2ae98bfd3de.jpg?resize=1000x750&vertical=center")',
    width: '100%',
    height: '300px', 
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
  };

  // Get the first object in the array
  const firstData = customersData[0];

  // Extract the fields from the first object
  const { firstName, lastName, ccNumber, ccExpiration, ccCode } = firstData;

  return (
    <div className='container'>
      <div className="row px-3">
        <div id='credit-card' className="col-12 d-flex flex-column justify-content-between p-5 rounded-4 mx-auto bg-dark" style={divStyle}>
          <div className='d-flex align-items-center'>
            <div className="col-8">
              <h3 className='color-4'>BOOTCAMP BANK</h3>
            </div>
            <div className="col text-end">
              <img src={contactLess} alt="" height={48} />
            </div>
          </div>
          <div className='d-flex align-items-end'>
            <div className="col-8">
              <h3 className='color-4'>{ccNumber}</h3>
              <div className='d-flex mt-4'>
                <h6 className='color-2 me-4'>EXPIRATION <span className='color-4 text-uppercase'>{ccExpiration}</span></h6>
                <h6 className='color-2'>CCV <span className='color-4'>{ccCode}</span></h6>
              </div>
            </div>
            <div className="col text-end">
              <img src={masterCard} alt="" height={48} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;