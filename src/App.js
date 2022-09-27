import React from "react"
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider";
import Card from "./components/Card";
import Products from "./components/Products";
import Daily from "./components/Daily";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

const App = ()=>{
  return(
      <div>
        <Navbar/>
        <Carousel/>
        <Slider/>
        <Card/>
        <Products/>
        <Daily/>
        <Offer/>
        <Footer/>
      </div>
  )
}

export default App;
