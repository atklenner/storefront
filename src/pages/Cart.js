import React from "react";
import CartContainer from "../features/cart/CartContainer";

export default function Cart() {
  return (
    <section className="section is-large has-background-primary-light">
      <div className="container">
        <CartContainer />
      </div>
    </section>
  );
}
