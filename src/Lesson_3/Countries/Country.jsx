import './Countries.css';
import { useState } from 'react';

function Country({ country, handleVisitedCountries }) {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    visited ? setVisited(false) : setVisited(true);
  };

  return (
    <div className='country'>
      <h2>{country?.name?.common}</h2>
      <img height={200} width={300} src={country.flags.png}></img>
      <button className={visited ? 'green' : 'gray'} onClick={() => {
        handleVisited();
        handleVisitedCountries(country);
      }}>Visited</button>
    </div>
  )
}

export default Country;