import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PaymentBrick from '../../components/MercadoPago/PaymentBrick';
import { getOrderById } from '../../redux/actions/orderActions';

import styles from './Order.module.css';

const OrderPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const dispatch = useDispatch();

  // Puedes obtener el estado global si es necesario
  const user = useSelector((state) => state.user); // Si tienes un estado de usuario

  useEffect(() => {
    // Llamamos al backend para obtener la orden
    const fetchOrder = async () => {
      try {
        const orderResponse = await dispatch(getOrderById(id)); // Asegúrate de tener la acción correspondiente
        setOrder(orderResponse);
      } catch (error) {
        console.error("Error al obtener la orden:", error);
      }
    };

    fetchOrder();
  }, [id, dispatch]);

  if (!order) {
    return <div>Loading...</div>; // Mostramos un loading mientras no tenemos la orden
  }

  const totalAmount = order.products.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = item.quantity || 1;
    return acc + itemPrice * itemQuantity;
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        {order.products.length === 0 ? (
          <div className={styles.noProducts}>
            <h3>No hay productos para comprar.</h3>
          </div>
        ) : (
          order.products.map((item, index) => (
            <div key={index} className={styles.productItem}>
              <img
                src={item.image || 'default-image.jpg'}
                alt={`Producto ${item.id}`}
                className={styles.listImage}
              />
              <div>
                <h2 className={styles.title}>{item.title || 'Producto sin nombre'}</h2>
                <p className={styles.price}>${parseFloat(item.price).toFixed(2)}</p>
                <p className={styles.quantity}>Cantidad: {item.quantity}</p>
              </div>
            </div>
          ))
        )}

        <div className={styles.total}>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </div>
      </div>

      <div className={styles.rightPanel}>
        {totalAmount > 0 ? (
          <PaymentBrick orderId={id} />
        ) : (
          <div className={styles.noProducts}>
            <h3>No hay productos para comprar.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
