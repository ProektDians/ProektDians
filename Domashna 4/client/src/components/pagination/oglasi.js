import React from 'react';
import Card from '../Card/card'
import './olgasi.css'

const Oglasi = ({ Restaurants, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
      <div className="Adverb">
          {

         Restaurants.map((val)=>{ 
             return( 
    <div className="wrapper">
    <Card  name={val.name} address={val.address} mastercard={val.mastercard} visa={val.visa} coins={val.coins} terasa={val.outdoor} smoking={val.smoking} internet={val.internet} cuisine={val.cuisine} website={val.website} opening_hours={val.opening_hours}
              addr={val.addrcity} phone={val.phone} wheelchair={val.wheelchair} ></Card>

    </div>)
            })
    }
      </div>
    
      
  );
};

export default Oglasi;