import { addToLS, getCartStorage } from '../utilities/localStorage';
import Bottle from './Bottle';
import './Style.css';
import { useEffect, useState } from 'react';

function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('bottle.json')
      .then(response => response.json())
      .then(data => setBottles(data.bottles));
  }, []);

  useEffect(() => {
    const storedCart = getCartStorage();
    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  }

  return (
    <div>
      <h3>Memorable Water Bottle</h3>
      <h3>Number of Items: {cart.length}</h3>
      <div className='bottles'>
        {
          bottles.map((bottle, index) =>
            <Bottle
              key={index}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
            >
            </Bottle>)
        }
      </div>
    </div>
  )
}

export default Bottles;