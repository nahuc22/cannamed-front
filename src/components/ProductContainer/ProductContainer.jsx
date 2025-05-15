import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../redux/actions/productActions";
import { addToCart , getCart} from "../../redux/actions/cartActions";
import { createOrder } from "../../redux/actions/orderActions";
import Sheet from "../Sheet/Sheet";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ProductContainer.module.css";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector((state) => state.product.product || []);
  const cartError = useSelector((state) => state.cart.error);
  const user = useSelector((state) => state.auth.user); 
  const products = allProducts.slice(0, 3);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!user) {
      alert("Por favor, inicia sesión para agregar productos al carrito.");
      return;
    }

    dispatch(addToCart(product))
    .then(() => {
      dispatch(getCart())
      setIsOpen(true)
    })
      .catch((error) => {
        console.error("Error al agregar al carrito:", cartError || error);
        alert(cartError || "No se pudo agregar al carrito.");
      });
  };
  const handleBuyNow = (product) => {
    if (!user) {
      alert("Debes iniciar sesión para comprar.");
      return;
    }
  
    const orderData = {
      fromCart: false,
      userId: user.id,
      productId: product.id,
      totalPrice: product.price,
    };
  
    dispatch(createOrder(orderData))
      .then(() => {
        navigate(`/order/${product.id}`); // redirigí donde prefieras
      })
      .catch((err) => {
        console.error("Error al crear la orden:", err);
        alert("No se pudo crear la orden.");
      });
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.productContainerHeader}>
        <h3>NUESTROS PRODUCTOS</h3>
      </div>
      <div className={styles.headerItem}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className={styles.card}>
              <Link to={`/products/${product.id}`} className={styles.cardLink}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
                <div className={styles.productInfo}>
                  <h2 className={styles.productTitle}>{product.name}</h2>
                  <p className={styles.productPrice}>$ {product.price}</p>
                </div>
              </Link>
              <div className={styles.productCta}>
                <p className={styles.productDescription}>{product.description}</p>
                <button
                  className={styles.productAddToCart}
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al carrito
                </button>
                <button
                  className={styles.productBuyNow}
                  onClick={() => handleBuyNow(product)}
                >
                  Comprar ahora
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noProductsMessage}>No hay productos para mostrar</p>
        )}
      </div>
      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );  
};

export default ProductContainer;