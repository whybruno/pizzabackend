import React from 'react';
import '../Hero/index.css';
import pizzaslices from "../../assets/Heroimage/pizza-hero-3.jpeg";
// import logo from "../../assets/Logo/OP-1-removebg-preview.png";
import Logo from "../../assets/Logo/slice-and-sizzle-logo.png";

function App() {
  return (
  
    <div className="w-screen h-screen text-white" id="Hero"style={{
      background: `url(${pizzaslices}) center/cover no-repeat`, // Set background image
    }} >
      <div class="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
        <div class="text-center lg:w-5/12 w-full">
          <img src={Logo} width={500}>
          </img>
          <div className="flex justify-center mx-auto">
            <a href="#Menu">
              <button
                className="bg-color-2 text-white fw-bold  rounded-full py-4 px-8">
                See Our Full Menu
              </button>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
 }
 
 export default App

