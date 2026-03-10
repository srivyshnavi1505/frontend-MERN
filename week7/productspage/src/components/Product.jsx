import React from "react";

function Product({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col grow">

        {/* Conditional Rendering */}
        {product.price > 500 && (
          <span className="bg-yellow-400 text-xs px-2 py-1 rounded mb-2 w-fit">
            Premium
          </span>
        )}

        {/* Product Name */}
        <h2 className="text-lg font-semibold">
          {product.name}
        </h2>

        {/* Brand */}
        <p className="text-sm text-gray-500">
          {product.brand}
        </p>

        {/* Description */}
        <p className="text-sm mt-2 text-gray-600 grow">
          {product.description}
        </p>

        {/* Price */}
        <p className="mt-4 text-xl font-bold text-black">
          ${product.price}
        </p>

        {/* Button */}
        <button className="mt-4 bg-blue-300 text-white py-2 rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Product;