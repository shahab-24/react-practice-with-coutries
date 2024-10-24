import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./Country-container.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // visited countries list handle function with parameter=======

  const handleVisitedCountry = (country) => {
    const allVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(allVisitedCountries);
    // console.log(country)
  };

  //   visited flags display handler=================================
  const handleVisitedFlag = (flag) => {
    console.log(flag)
    const newVisitedFlags = [...visitedFlags, flag]

    setVisitedFlags(newVisitedFlags)
}
  return (
    <div>
      <h3>All countries length: {countries.length}</h3>
      <div>
        <h3>visited countries: {visitedCountries.length} </h3>
        <ul>
          {visitedCountries.map((item) => (
            <li>{item.name.common}</li>
          ))}
        </ul>
      </div>
      <h3>Vistied flags</h3>

      <div className="flags_container">
       {
        visitedFlags.map(flag => <img src={flag} alt="" /> )
       }
      </div>

      <div className="country_container">
        {countries.map((country) => (
          <Country key={country.cca3}
            handleVisitedFlag={handleVisitedFlag}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
