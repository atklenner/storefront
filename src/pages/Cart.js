import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <section className="section is-large has-background-primary-light">
      <div className="container">
        <h1 className="title">Your Cart Is Empty</h1>
        <Link to="/products" className="button">
          Fill It
        </Link>
      </div>
    </section>
  );
}
