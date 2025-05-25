import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Products.module.css';

const Products = () => {
  const products = useSelector(state => state.product.product);

  return (
    <div className="flex flex-col p-4">
      {/* HERO */}
      <section className="bg-gray-100 py-16 text-center mb-8">
        <h1 className="text-4xl font-bold">Shop</h1>
      </section>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* FILTER SECTION */}
        <aside className="lg:w-1/4 w-full border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Product Categories</h3>
          <ul className="mb-4 space-y-1">
            <li className="cursor-pointer hover:underline">All</li>
            <li className="cursor-pointer hover:underline">Heels</li>
            <li className="cursor-pointer hover:underline">Sneakers</li>
            <li className="cursor-pointer hover:underline">Boots</li>
            <li className="cursor-pointer hover:underline">Flats</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Color</h3>
          <ul className="mb-4 space-y-1">
            <li className="cursor-pointer hover:underline">Black</li>
            <li className="cursor-pointer hover:underline">White</li>
            <li className="cursor-pointer hover:underline">Red</li>
            <li className="cursor-pointer hover:underline">Blue</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Price</h3>
          <input type="range" min="0" max="1000" className="w-full mb-2" />
          <button className="mt-2 w-full bg-black text-white py-1 rounded hover:bg-gray-800">Filter</button>
        </aside>

        {/* PRODUCTS SECTION */}
        <section className="lg:w-3/4 w-full">
          <div className="flex justify-end mb-4">
            <label className="mr-2">Sort by:</label>
            <select className="border rounded px-2 py-1">
              <option>Default</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
              <option>Rating</option>
            </select>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                  />
                </div>
                <h4 className={styles.title}>{product.name}</h4>
                <p className={styles.price}>${product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
