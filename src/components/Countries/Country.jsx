import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    const {name,flags, capital, area, cca3} = country;
  
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`country ${ visited ? "visited" : "non-visited"}`}>
            
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Capital: {capital}</h4>
            <p>Area: {area}</p>
            <p><small>cca: {cca3}</small></p>

            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={()=>handleVisitedCountry(country)}>{visited ? 'visited': "want to visit"}</button>
            <br />
            <button style={{margin : "10px"}} className='btn btn-ghost' onClick={handleVisited}>{visited ? 'Yes, Visited' : " No, not Visited"}</button>
            {/* {visited ? 'i have visited' : "not visited yet"} */}
        </div>
    );
};

export default Country;