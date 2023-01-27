import React, { Component } from 'react';
import './States.scss';
import State from '../State/State';
import { tourData } from '../tourData';

export default class States extends
Component {
  city = {
    cities: tourData
  };

  render() {
    const {cities} = this.city;
   
  
    return (
     <section className='statesList'>
       {cities.map(tour => {
        return(
          <State key={tour.id} tour={tour} />
        )
       })}
      </section>
    );
}
}


