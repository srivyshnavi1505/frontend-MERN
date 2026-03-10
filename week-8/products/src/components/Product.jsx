import React from "react";
import { useLocation } from "react-router";

function Product() {

  const { state } = useLocation();
  const product = state?.productt;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <div className="flex flex-col md:flex-row gap-10">

        {/* Image */}

        <div className="w-full md:w-2/5">

          <img
            src={product?.image}
            className="w-full h-80 object-contain"
          />

        </div>


        {/* Details */}

        <div className="w-full md:w-3/5 flex flex-col gap-6">

          <h1 className="text-2xl md:text-3xl font-bold">
            {product?.title}
          </h1>

          <p className="text-gray-600 leading-relaxed">
            {product?.description}
          </p>

          <p className="text-2xl font-bold text-blue-600">
            ${product?.price}
          </p>

          <span className="bg-amber-300 px-4 py-2 rounded-lg w-fit">
            {product?.category}
          </span>

        </div>

      </div>

    </div>
  );
}

export default Product;