import { useState } from "react";
import NavBar from "../NavBar";
import Hero from "../Hero";
import Supersellers from "../Supersellers";
import Menu from "../Menu";
import Order from "../Order";
import Checkout from "../Checkout";
import Feedbacks from "../Feedbacks";
import Contact from "../Contact";
import Footer from "../Footer";
// import CreditCard from '../CreditCard';

const Home = () => {
  const [orderItems, setOrderItems] = useState([]);

  // Function to add a pizza to the order
  const addToOrder = (pizza) => {
    setOrderItems([...orderItems, { ...pizza, qty: 1 }]);
  };

  // Function to update the quantity of a pizza in the order
  const updateQuantity = (index, newQuantity) => {
    const updatedOrderItems = [...orderItems];
    updatedOrderItems[index].qty = newQuantity;
    setOrderItems(updatedOrderItems);
  };

  // Function to calculate order subtotal
  const calculateSubtotal = () => {
    let subtotal = 0;
    orderItems.forEach((pizza) => {
      subtotal += parseFloat(pizza[pizza.selectedPrice]) * pizza.qty;
    });
    return subtotal.toFixed(2);
  };

  // Function to calculate the order subtotal and delivery fee
  const calculateTotal = () => {
    let subtotal = 0;
    orderItems.forEach((pizza) => {
      subtotal += parseFloat(pizza[pizza.selectedPrice]) * pizza.qty;
    });
    const deliveryFee = 2.5; // Set your delivery fee here
    const total = subtotal + deliveryFee;
    return { subtotal: subtotal.toFixed(2), total: total.toFixed(2) };
  };

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Supersellers></Supersellers>
      <Menu onAddToOrder={addToOrder}></Menu>
      <div className="d-flex flex-column flex-lg-row gap-3">
        <Order
          orderItems={orderItems}
          onUpdateQuantity={updateQuantity}
        ></Order>
        <Checkout
          subtotal={calculateTotal().subtotal}
          total={calculateTotal().total}
        ></Checkout>
      </div>
      <Feedbacks></Feedbacks>/
      <Contact></Contact>
      <Footer></Footer>
      {/* <CreditCard></CreditCard> */}
    </>
  );
};

export default Home;
