import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <div className="bg-gradient-to-r from-red-200 to-red-300">

      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">

        <img
          src="https://s.tmimgcdn.com/scr/1200x750/288000/logo-design-for-e-commerce-website-or-e-business-concept-for-smartphone-and-shop_288014-original.jpg"
          className="w-16 rounded-xl"
        />

        <ul className="flex gap-6 text-lg font-semibold text-cyan-950">
          <li>
            <NavLink to="" className={({isActive}) => isActive ? "text-red-900" : ""}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="products" className={({isActive}) => isActive ? "text-red-900" : ""}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="contactus" className={({isActive}) => isActive ? "text-red-900" : ""}>
              Contact
            </NavLink>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Header;