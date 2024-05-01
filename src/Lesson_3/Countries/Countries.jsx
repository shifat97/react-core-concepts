import { useEffect, useState } from 'react';
import './Countries.css'
import Country from './Country';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const handleVisitedCountries = country => {
    const newCountries = [...visitedCountries, country];
    setVisitedCountries(newCountries);
  }

  return (
    <div>
      <ul>
        {
          visitedCountries.map(country => <li key={country.cca3}>{country?.name?.common}</li>)
        }
      </ul>
      <div className='countries'>
        {
          countries.map(country => <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}></Country>)
        }
      </div>
    </div>
  )
}

export default Countries;