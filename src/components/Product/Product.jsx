import React from 'react';
import styles from './Product.module.css';
import { useSelector } from 'react-redux';

const Products = () => {

  const products = useSelector(state => state.product.product)
  console.log(products)
  return (
    <div className={styles.container}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Shop</h1>
      </section>

      {/* MAIN CONTENT */}
      <div className={styles.content}>
        
        {/* FILTER SECTION */}
        <aside className={styles.filter}>
          <h3>Product Categories</h3>
          <ul>
            <li>All</li>
            <li>Heels</li>
            <li>Sneakers</li>
            <li>Boots</li>
            <li>Flats</li>
          </ul>

          <h3>Color</h3>
          <ul>
            <li>Black</li>
            <li>White</li>
            <li>Red</li>
            <li>Blue</li>
          </ul>

          <h3>Price</h3>
          <input type="range" min="0" max="1000" />
          <button>Filter</button>
        </aside>

        {/* SORT + PRODUCTS SECTION */}
        <section className={styles.productsSection}>
          <div className={styles.sortBar}>
            <span>Sort by:</span>
            <select>
              <option>Default</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
              <option>Rating</option>
            </select>
          </div>

          <div className={styles.productsGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
