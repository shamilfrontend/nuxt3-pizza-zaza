import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

import './App.css';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          index
          element={<ProductList />}
        />
        <Route
          path="form"
          element={<Form />}
        />
      </Routes>
    </div>
  );
}

export default App;
