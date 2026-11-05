import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const deliveryFee = 2000;
  const total = getCartTotal() + deliveryFee;

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // In a real app, this would navigate to checkout page
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: 80, marginBottom: 20 }}></div>
        <h2 style={{ marginBottom: 10 }}>Your cart is empty</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: 24 }}>
          Looks like you haven't added anything to your cart yet
        </p>
        <Link to="/shop" className="btn btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page container" style={{ padding: '40px 20px' }}>
      <div className="cart-header">
        <h1>Your Cart ({cartItems.length} items)</h1>
        <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          <div className="cart-table-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span></span>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>
              <span className="cart-item-price">₦{item.price.toLocaleString()}</span>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <span className="cart-item-total">{(item.price * item.quantity).toLocaleString()}</span>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>️</button>
            </div>
          ))}
          
          <button 
            onClick={clearCart}
            className="btn btn-outline"
            style={{ marginTop: 16, width: 'fit-content' }}
          >
            Clear Cart
          </button>
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦{getCartTotal().toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </div>
          <div className="summary-row total-row">
            <span>Total</span>
            <span>{total.toLocaleString()}</span>
          </div>

          <button 
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: 16, padding: '14px' }}
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>

          <div className="cart-features">
            <div className="cart-feature">
              <span>🔒</span>
              <div>
                <strong>Secure Payment</strong>
                <p>Your information is safe</p>
              </div>
            </div>
            <div className="cart-feature">
              <span>🚚</span>
              <div>
                <strong>Fast Delivery</strong>
                <p>Within 2-3 business days</p>
              </div>
            </div>
            <div className="cart-feature">
              <span>📞</span>
              <div>
                <strong>24/7 Support</strong>
                <p>We're always here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;