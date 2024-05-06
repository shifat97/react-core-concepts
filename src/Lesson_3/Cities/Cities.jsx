import { useState, useEffect } from "react";
import './Cities.css';
import City from "./City";

function Cities() {
  const [cities, setCities] = useState([]);
  const [visitedList, setVisitedList] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCities(data));
  }, []);

  const addCityToVisitedList = (city) => {
    const checkForDuplicateCity = visitedList.find(c => c.name.common === city.name.common);

    if (checkForDuplicateCity) {
      return;
    }

    const newList = [...visitedList, city];
    setVisitedList(newList);
  }

  const removeDuplicateCity = (city) => {
    const unique = visitedList.filter(c => c.name.common != city.name.common);
    setVisitedList(unique);
  }

  return (
    <div>
      <div>
        <ul>
          {
            visitedList.map((list, index) => <li key={index}>{list.name.common}</li>)
          }
        </ul>
      </div>
      <div className="countries">
        {
          cities.map((city, index) =>
            <City
              key={index}
              city={city}
              addCityToVisitedList={addCityToVisitedList}
              removeDuplicateCity={removeDuplicateCity}
            >
            </City>
          )
        }
      </div>
    </div>
  )
}

export default Cities;