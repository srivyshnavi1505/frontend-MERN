import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ProductsList() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const gotoProduct = (product) => {
    navigate("/product", { state: { productt: product } });
  };

  const searchbar = () => {
    const result = products.filter((product) =>
      product.category.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(result);
  };

  useEffect(() => {

    async function getProducts() {

      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setProducts(data);
      setFilteredProducts(data);
    }

    getProducts();

  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      {/* Search Section */}

      <div className="flex flex-wrap gap-4 mb-8">

        <input
          type="text"
          placeholder="Search by category..."
          className="border px-4 py-2 rounded-lg w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={searchbar}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>

      </div>


      {/* Products Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            onClick={() => gotoProduct(product)}
            className="border rounded-xl p-4 shadow hover:shadow-lg cursor-pointer transition"
          >

            <img
              src={product.image}
              className="h-40 mx-auto object-contain"
            />

            <h2 className="mt-4 font-semibold line-clamp-2">
              {product.title}
            </h2>

            <p className="text-blue-600 font-bold mt-2">
              ${product.price}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProductsList;