import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    const {name,flags, capital, area, cca3} = country;
  
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className="country">
            
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Capital: {capital}</h4>
            <p>Area: {area}</p>
            <p><small>cca: {cca3}</small></p>
            <button className='btn btn-ghost' onClick={handleVisited}>{visited ? 'Visited' : "Not Visited"}</button>
            {/* {visited ? 'i have visited' : "not visited yet"} */}
        </div>
    );
};

export default Country;