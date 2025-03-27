import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import images from "./ImageProvider";
import { useCart } from "./CartContext";  

const Product = () => {
  const { addToCart, addToWishlist } = useCart();  

  const products = [
    {
      id: 1,
      name: "Fresh Apples",
      imgUrl: images.Apple,
      description: "Crisp and juicy apples, rich in fiber and vitamins.",
      category: "Fruits",
      price: 120,
      rating: 4.6,
    },
    {
      id: 2,
      name: "Leather Belt",
      imgUrl: images.Belt,
      description: "Durable and stylish leather belt for all outfits.",
      category: "Accessories",
      price: 699,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Green Spinach",
      imgUrl: images.Spinach,
      description: "Fresh and nutrient-rich spinach leaves.",
      category: "Vegetables",
      price: 35,
      rating: 4.3,
    },
    {
      id: 4,
      name: "Organic Bananas",
      imgUrl: images.Banana,
      description: "Naturally sweet and potassium-rich bananas.",
      category: "Fruits",
      price: 60,
      rating: 4.8,
    },
    {
      id: 5,
      name: "Sunglasses",
      imgUrl: images.Sunglasses,
      description: "UV-protected stylish sunglasses for outdoor activities.",
      category: "Accessories",
      price: 1299,
      rating: 4.7,
    },
    {
      id: 6,
      name: "Fresh Tomatoes",
      imgUrl: images.Tomato,
      description: "Ripe and juicy tomatoes for salads and cooking.",
      category: "Vegetables",
      price: 40,
      rating: 4.2,
    },
    {
      id: 7,
      name: "Juicy Oranges",
      imgUrl: images.Orange,
      description: "Sweet and tangy oranges, rich in vitamin C.",
      category: "Fruits",
      price: 90,
      rating: 4.5,
    },
    {
      id: 8,
      name: "Leather Wallet",
      imgUrl: images.Wallet,
      description: "Premium leather wallet with multiple compartments.",
      category: "Accessories",
      price: 899,
      rating: 4.6,
    },
    {
      id: 9,
      name: "Organic Carrots",
      imgUrl: images.Carrot,
      description: "Crunchy and sweet carrots, rich in beta-carotene.",
      category: "Vegetables",
      price: 50,
      rating: 4.5,
    },
    {
      id: 10,
      name: "Baseball Cap",
      imgUrl: images.Cap,
      description: "Trendy and adjustable cap for casual wear.",
      category: "Accessories",
      price: 499,
      rating: 4.2,
    },
  ];

  return (
    <div className="container-fluid overflow-hidden my-3">
      <div className="row g-4 justify-content-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center mx-2 my-3 py-3"
          >
            <div className="products d-flex flex-column justify-content-between text-center rounded shadow p-4 larger-card w-100">
              <div className="img-con mb-4">
                <img
                  src={product.imgUrl}
                  alt={product.name}
                  className="img-fluid rounded"
                />
              </div>

              <div className="info-con">
                <h5>{product.name}</h5>
                <span className="fs-6 text-dark my-4">₹{product.price}</span>
                <br />

                <div className="mt-4 d-flex justify-content-around align-items-center star">
                  <span className="d-flex align-items-center text-dark">
                    <img
                      src={images.Star}
                      alt="Rating"
                      className="img-fluid rate-img me-1"
                    />
                    {product.rating}
                  </span>

                  <div className="d-flex align-items-center">
                    <button
                      className="border-0 bg-transparent"
                      title="Add to Wishlist"
                      onClick={() => addToWishlist(product)}
                    >
                      <IoMdHeartEmpty className="fs-2 mx-1 text-danger" />
                    </button>

                    <button
                      onClick={() => addToCart(product)}
                      className="border-0 bg-transparent"
                      title="Add to Cart"
                    >
                      <img src={images.Cart} alt="Cart" className="cart mx-1" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
