import React, {FC, useEffect, useRef, useState} from 'react'
import { Loader } from '@googlemaps/js-api-loader';
import { PokemonLocation } from '../../data/types/Pokemon';
import { moveoLocation, mapOptions } from '../../data/constants';
import { addDirections } from '../../utils/functions';


const Map: FC<{ pokemonLocation: PokemonLocation }> = ({ pokemonLocation }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

  useEffect(() => {
    const fetchMap = async () => {
      try {
        const loader = new Loader({
          apiKey: apiKey,
          version: "weekly",
        });

        const google = await loader.load();
        
        const map: google.maps.Map = new google.maps.Map(
          mapRef.current as HTMLDivElement,
          mapOptions
        );

        addDirections(
          map,
          pokemonLocation,
        );
      } catch (error) {
        console.error("Error loading Google Maps API:", error);
      }
    };

    fetchMap();
  }, [pokemonLocation]);


  return (
    <>
    <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>
    </>

  )
}

export default Map;