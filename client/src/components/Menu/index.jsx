import React, { useState, useEffect } from "react";
import pizzasData from "../../pizzas.json";
import axios from "axios";

function Menu({ onAddToOrder }) {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('smPrice'); // Initial selected price is small

  useEffect(() => {
// <<<<<<< frontendalex
//     //get data from server
//     axios.get("/api/inventory").then((response) => {
//       setPizzas(response.data);
//     });
//   }, []); // Empty dependency array to run the effect only once
// =======
    setPizzas(pizzasData.map(pizza => ({
      ...pizza,
      selectedPrice: 'smPrice', // Initialize selected price for each pizza
      selectedSize: 'SMALL' // Initialize selected size for each pizza
    })));
  }, []);

  const handleSizeClick = (pizzaId, priceKey, size) => {
    setPizzas(prevPizzas =>
      prevPizzas.map(pizza =>
        pizza.id === pizzaId ? { ...pizza, selectedPrice: priceKey, selectedSize: size } : pizza
      )
    );
  };

  const handleQuickAdd = (pizza) => {
    onAddToOrder({ ...pizza, size: pizza.selectedSize }); // Pass the selected size along with the pizza
  };


  return (
    <div className='container-fluid p-5 bg-color-2' id="Menu">
      <div className='row mb-4 ps-md-5 ps-lg-0'>
        <h2 className='display-5 color-4 fw-bold'>Explore Our Menu</h2>
      </div>
      <div className='row px-md-5 px-lg-0 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
        {pizzas.map((pizza) => (
          <div className="col py-3" key={pizza.id}>
            <div className="card rounded-3 border border-3 border-dark">
              <div className="card-header border-bottom border-3 border-dark p-4">
                <img src={pizza.imageUrl} className='img-fluid mx-auto d-block mb-3' alt={pizza.productName} /> {/* Add alt text */}
                <button
                  type="button"
                  className="w-100 p-3 btn btn-lg btn-outline-dark fw-bold"
                  onClick={() => handleQuickAdd(pizza)} // Pass the selected pizza to handleQuickAdd
                >
                  QUICK ADD
                </button>
              </div>
              <div className="card-body p-4 pb-2 bg-color-1">

                <div className='d-flex justify-content-between align-items-center'>
                  <p className="card-title fs-1 fw-bold pricing-card-title color-4">
                    £{pizza[pizza.selectedPrice]}
                  </p>
                  <div className='d-flex gap-3'>
                    <p
                      id={`small-price-${pizza.id}`}
                      className={`card-title fs-6 fw-bold pizza-size smPrice ${pizza.selectedPrice === 'smPrice' ? 'color-2' : ''}`}
                      onClick={() => handleSizeClick(pizza.id, 'smPrice', 'SMALL')}
                    >
                      SMALL
                    </p>
                    <p
                      id={`large-price-${pizza.id}`}
                      className={`card-title fs-6 fw-bold pizza-size lgPrice ${pizza.selectedPrice === 'lgPrice' ? 'color-2' : ''}`}
                      onClick={() => handleSizeClick(pizza.id, 'lgPrice', 'LARGE')}
                    >
                      LARGE
                    </p>

                  </div>
                </div>
                <div className="text-center">
                  <h3 className="fw-bold color-2">{pizza.productName}</h3>
                  <p className="fs-5 mt-3 px-0 px-lg-3 color-4">
                    {pizza.ingredients.join(", ")}
                  </p>{" "}
                  {/* Display ingredients */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
