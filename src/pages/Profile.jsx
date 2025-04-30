import React from "react";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"
export default function Profile() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  useWindowScrollToTop()
  return (
    <section id="profile">
        <div className="profile-container m-auto">
            <div className="profile text-center">
                <h2>Welcome, {user?.name}</h2>
                <p>Email: {user?.email}</p>
                <button className="logout-btn" onClick={() => {
                    localStorage.removeItem("userInfo");
                    window.location.href = "/Ecommerce-Ostora-shop/";
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    </section>
  );
}