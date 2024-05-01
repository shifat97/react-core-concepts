import './Cities.css';
import { useState } from 'react';

function City({ city, addCityToVisitedList, removeDuplicateCity }) {
  const [isVisited, setIsVisited] = useState(false);

  const checkIsVisited = () => {
    isVisited ? setIsVisited(false) : setIsVisited(true);
  }

  return (
    <div className="country">
      <h2>{city?.name?.common}</h2>
      <img width={300} height={200} src={city.flags.png} alt="" />
      <button className={isVisited ? 'hidden' : 'visible'} onClick={() => {
        checkIsVisited();
        addCityToVisitedList(city);
      }}>Visited</button>
      <button className={isVisited ? 'visible' : 'hidden'} onClick={() => {
        checkIsVisited();
        removeDuplicateCity(city);
      }}>Not Visited</button>
    </div>
  )
}

export default City;