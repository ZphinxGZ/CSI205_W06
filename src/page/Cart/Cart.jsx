import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Cart.css";

function Cart({ carts, setCarts }) {
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const handleCheckout = () => {
    const totalPrice = carts.reduce((prev, cart) => {
      return prev + cart.price;
    }, 0);

    setCheckoutMessage(
      `สั่งซื้อเรียบร้อย ด้วยจำนวนเงิน $${totalPrice.toFixed(2)}`
    );
    setIsCheckedOut(true); // Disable buttons when checked out
  };

  const handleCancelOrder = () => {
    setCheckoutMessage(""); // Clear the message
    setIsCheckedOut(false); // Enable buttons again
  };

  return (
    <div className="cart-container">
      <div className="cart-items-container mb-2">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>&#36;{cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() =>
                    setCarts(carts.filter((c) => c.id !== cart.id))
                  }
                  disabled={isCheckedOut} // Disable if checked out
                >
                  Remove from Carts
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      {checkoutMessage ? (
        <h4 className="text-success">{checkoutMessage}</h4>
      ) : (
        <h4>
          Items: {carts.length} items - Total Price:{" "}
          <span className="text-danger">
            $
            {carts
              .reduce((prev, cart) => {
                return prev + cart.price;
              }, 0)
              .toFixed(2)}
          </span>
        </h4>
      )}
      <div className="buttons">
        <button
          className="btn btn-success"
          onClick={handleCheckout}
          disabled={isCheckedOut} // Disable if checked out
        >
          Checkout
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={handleCancelOrder}
          disabled={!isCheckedOut} // Disable if not checked out
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
