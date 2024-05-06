import './Style.css';

function Bottle({ bottle, handleAddToCart }) {
  return (
    <div className='bottle'>
      <h3>{bottle.name}</h3>
      <img height={200} width={200} src={bottle.image}></img>
      <p>Price: {bottle.price}</p>
      <button onClick={() => {
        handleAddToCart(bottle);
      }}>Purchase</button>
    </div>
  )
}

export default Bottle;