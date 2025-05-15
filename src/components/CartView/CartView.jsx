import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './cartView.module.css';
import { getCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/actions/cartActions';
import { createOrder } from '../../redux/actions/orderActions';
import { Trash, Plus, Minus } from "lucide-react";
import { logoutUser } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const CartView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const cartId = useSelector((state) => state.cart.cartId);
  
  
  const total = Array.isArray(cartItems)
  ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  : 0;
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getCart());
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/home');
  };

  const handleCheckout = async () => {
    try {
      const orderData = {
        userId: user?.id,
        cartId: cartId,
      };
      
      if (!orderData.userId || !orderData.cartId) {
        console.error('Faltan datos para crear la orden:', orderData);
        return;
      }
  
      const result = await dispatch(createOrder(orderData));
      if (result?.order?.id) {
        navigate(`/order/${result.order.id}`);
      } else {
        console.log('La orden se creó pero no se recibió el ID');
      }
  
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };

  if (!isLoggedIn) return null;

  return (
    <div className={styles.sheetOverlay}>
      <div className={styles.sheet}>
        <div className={styles.cartContent}>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <ul className={styles.cartList}>
              {Array.isArray(cartItems) && cartItems.map((item) => (
                <li key={item.productId} className={styles.cartItem}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.cartItemImage}
                  />
                  <div className={styles.cartItemInfo}>
                    <p>{item.name}</p>
                    <p>${item.price * item.quantity}</p>
                    <small>{item.price} x {item.quantity}</small>
                  </div>
                  <div className={styles.quantityControls}>
                    <button onClick={() => dispatch(decreaseQuantity(item.productId))} disabled={item.quantity <= 1}>
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.productId))}>
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    className={styles.removeButton}
                    onClick={() => dispatch(removeFromCart(item.productId))}
                  >
                    <Trash size={20} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.cartTotal}>
          <p>Total: ${total}</p>
        </div>

        {cartItems.length > 0 && (
          <button
            className={styles.payButton}
            onClick={handleCheckout} // Usamos handleCheckout aquí
          >
            Efectuar pago
          </button>
        )}

        <button className={styles.exitButton} onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default CartView;
