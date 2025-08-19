import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://ecommerce-sunil.onrender.com";

export default function ProductDetails() {
  const { id } = useParams(); // product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
         const res = await axios.get(`${BASE_URL}/api/products/${"https: //ecommerce-sunil.onrender.com/api/products/123"}`);
        // Some APIs wrap data => res.data.data
        const prod = res.data?.data || res.data;
        setProduct(prod);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // Add to Cart
  const handleAddToCart = async () => {
    try {
      await axios.post(`${BASE_URL}/api/cart/add`, {
        productId: id,
        quantity,
        size: selectedSize,
        color: selectedColor,
      });
      alert("Added to cart ✅");
    } catch (err) {
      console.error(err);
    }
  };

  // Add to Wishlist
  const handleAddToWishlist = async () => {
    try {
      await axios.post(`${BASE_URL}/api/wishlist/add`, { productId: id });
      alert("Added to wishlist ✅");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="p-6">Loading product...</p>;
  if (!product) return <p className="p-6 text-red-500">Product not found ❌</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Images */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-6">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumbnail-${i}`}
                className="w-30 h-34 object-cover rounded cursor-pointer border"
              />
            ))}
          </div>
          <img
            src={product.images?.[0]}
            alt="main"
            className="w-[300px] h-[500px] object-cover rounded-lg"
            style={{ cursor: "zoom-in" }}
          />
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <span className="text-yellow-500">★★★★☆</span>
            <span>({product.reviews?.length || 0} Reviews)</span>
            <span className="text-green-600 font-semibold">In Stock</span>
          </div>

          <div className="mt-3">
            {product.price && (
              <span className="text-gray-500 line-through mr-2">
                ₹{product.price}
              </span>
            )}
            <span className="text-red-600 text-2xl font-bold">
              ₹{product.discountPrice || product.price}
            </span>
            <p className="text-xs text-gray-500">Inclusive of all taxes</p>
          </div>

          <p className="mt-3 text-gray-700">{product.description}</p>
          <hr className="my-4" />

          {/* Colors */}
          {Array.isArray(product.colors) && (
            <div className="mt-4">
              <p className="font-semibold">Colours:</p>
              <div className="flex gap-2 mt-2">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    className={`w-6 h-6 rounded-full border ${
                      selectedColor === c ? "ring-2 ring-black" : ""
                    }`}
                    style={{ backgroundColor: c }}
                    onClick={() => setSelectedColor(c)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes + Quantity */}
          <div className="mt-4 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <p className="font-semibold">Size:</p>
              <div className="flex gap-1">
                {Array.isArray(product.sizes) &&
                  product.sizes.map((size, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedSize(size)}
                      className={`px-2 py-1 border rounded ${
                        selectedSize === size ? "bg-red-500 text-white" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span className="px-3 py-1 border rounded">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={handleAddToWishlist}
              className="bg-red-500 px-4 py-2 rounded text-white"
            >
              Add Wishlist
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-red-500 px-4 py-2 rounded text-white"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10 border p-4 rounded bg-white">
        <h3 className="font-semibold text-lg mb-4">
          Customer Reviews ({product.reviews?.length || 0})
        </h3>
        {product.reviews?.map((review, i) => (
          <div
            key={review.id || i}
            className="mb-4 pb-4 border-b last:border-none"
          >
            <p className="text-red-500 font-bold">{review.rating} ★</p>
            <p className="text-gray-700 mt-1">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

