import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Modal, Button } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import images from "./ImageProvider";  

const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist } = useCart();  
  const [showModal, setShowModal] = useState(false);

  const handleMoveAllToCart = () => {
    wishlist.forEach((item) => addToCart(item));
    setShowModal(true);
  };

  return (
    <div className="container-fluid overflow-hidden my-5">
      <div className="row g-4 justify-content-center">
        {wishlist.length === 0 ? (
          <div className="text-center my-5">
            <h2>Your Wishlist is Empty</h2>
          </div>
        ) : (
          wishlist.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center mx-2 my-3 py-3"
            >
              <div className="products d-flex flex-column justify-content-between text-center rounded shadow p-4 larger-card w-100">
                
                {/* Image Section */}
                <div className="img-con mb-4">
                  <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="img-fluid rounded"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>

                {/* Product Info Section */}
                <div className="info-con">
                  <h5>{product.name}</h5>
                  <span className="fs-6 text-dark my-2">₹{product.price}</span>
                  <p className="text-muted">Rating: ⭐ {product.rating}</p>

                  <div className="d-flex justify-content-around align-items-center mt-3">
                    
                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(product)}
                      className="btn btn-success btn-sm"
                    >
                      Cart
                    </button>

                    {/* Remove from Wishlist Button */}
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))
        )}
      </div>

      {wishlist.length > 0 && (
        <div className="text-center my-5">
          <Button onClick={handleMoveAllToCart} className="btn btn-primary">
            Move All to Cart
          </Button>
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>All items have been moved to the cart!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Wishlist;
