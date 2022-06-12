import React from "react";
import Testimonial from "../testimonials/Testimonials";
import Hero from "./hero/Hero";
import Menu from "./menu/Menu";

const HomeContainer = ({ products }) => {
  return (
    <div>
      <Hero />
      <Testimonial />
      <Menu products={products} />
    </div>
  );
};

export default HomeContainer;
