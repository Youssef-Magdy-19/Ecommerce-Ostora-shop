import React from "react";
import { Link } from "react-router-dom";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"
export default function OrderSuccess() {
  useWindowScrollToTop()
  return (
    <section id="success">
      <div className="success-container m-auto text-center">
        <h2>Thank you for your order!</h2>
        <p>Your request has been successfully submitted and you will be contacted soon.</p>
        <Link className="back-btn text-decoration-none" to="/shop">Back To Shop</Link>
      </div>
    </section>
  );
}