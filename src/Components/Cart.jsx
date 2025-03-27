import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Modal, Button } from "react-bootstrap";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    setShowModal(true);
  };

  return (
    <div className="container-fluid overflow-hidden my-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center my-5">
          <h4>Your Cart is Empty</h4>
        </div>
      ) : (
        <>
          <div className="row g-4 justify-content-center">
            {cart.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center mx-2 my-3 py-3"
              >
                <div 
                  className="products d-flex flex-column justify-content-between text-center rounded shadow p-4 larger-card w-100"
                  style={{ minHeight: "100%" }}
                >

                  {/* Image Section */}
                  <div className="img-con mb-4">
                    <img
                      src={product.imgUrl}
                      alt={product.name}
                      className="img-fluid rounded"
                      style={{ height: "280px", objectFit: "cover" }}
                    />
                  </div>

                  {/* Product Info Section */}
                  <div className="info-con d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <h5>{product.name}</h5>
                      <span className="fs-6 text-dark my-2">₹{product.price}</span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="d-flex justify-content-around align-items-center mt-3">
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="btn btn-outline-danger btn-sm"
                        disabled={product.quantity === 1}
                      >
                        -
                      </button>

                      <span className="fw-bold mb-4">{product.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="btn btn-outline-success btn-sm"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <div className="my-1">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="btn btn-danger btn-sm w-100"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="mt-5 p-4 bg-light rounded shadow">
            <h4 className="text-center">Order Summary</h4>

            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.name}
                  <span className="fw-bold">₹ {item.price} x {item.quantity}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <p className="fw-bold">Total Price: ₹{totalPrice.toFixed(2)}</p>

              <button
                className="btn btn-primary mt-3"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>

          {/* Modal for Order Confirmation */}
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Order Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="text-success text-center fw-bold">Order placed successfully!</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Cart;
