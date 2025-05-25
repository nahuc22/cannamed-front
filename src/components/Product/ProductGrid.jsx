import React from 'react';
import styles from './ProductGrid.module.css';
import { useSelector } from 'react-redux';

const ElectronicsGrid = () => {

    const products = useSelector(state => state.product.product);
    
    return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Categories</h2>
        <div className={styles.filterGroup}>
          <label><input type="checkbox" /> Gaming</label>
          <label><input type="checkbox" /> Monitors</label>
          <label><input type="checkbox" /> Consoles</label>
          <label><input type="checkbox" /> Tablets</label>
        </div>
      </aside>

      <section className={styles.products}>
        {products.map(product => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <div className={styles.selectRow}>
              <select className={styles.select}>
                <option>Storage</option>
                <option>512GB</option>
              </select>
              <select className={styles.select}>
                <option>Color</option>
                <option>Gray</option>
              </select>
            </div>
            <button className={styles.button}>Add to cart</button>
            <div className={styles.delivery}>Estimated delivery: Tomorrow</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ElectronicsGrid;
