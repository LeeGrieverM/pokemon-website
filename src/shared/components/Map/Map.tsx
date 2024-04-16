import React, {FC, useEffect, useRef, useState} from 'react'
import { Loader } from '@googlemaps/js-api-loader';
import { Pokemon, PokemonLocation } from '../../data/types/Pokemon';
import { mapOptions } from '../../data/constants';
import { addDirections } from '../../utils/functions';
import { MapContainer } from './styles';

const Map: FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
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
          pokemon,
        );
      } catch (error) {
        console.error("Error loading Google Maps API:", error);
      }
    };

    fetchMap();
  }, [pokemon.location]);


  return (
    <MapContainer ref={mapRef}/>

  )
}

export default Map;