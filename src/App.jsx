import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import PasarelaPago from './components/PasarelaPago/PasarelaPago';

import { Home, Landing, Form, Detail, Order } from './views/index';
import { checkAuth } from './redux/actions/authActions';

import style from './App.module.css';
import Product from './components/Product/Product';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className={style.App}>
      {location.pathname !== "/" && <NavBar />}
      {/* <SheetComponent open={isSheetOpen} setOpen={setIsSheetOpen} /> */}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<Form />} />
        <Route path="/products" element={<Product />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/order/" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
