import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Planet = (props) => {
    const [planet, setPlanet] = useState([]);

    const {number} = useParams();

    const handleWater = () => {
        if(planet.surface_water == 1){
            return "true";
        } else{
            return "false";
        }
    }

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/"+number)
            .then(response => {
                console.log(response.data);
                setPlanet(response.data);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
        <h3>{planet.name}</h3>
        <p>Climate: {planet.climate} </p>
        <p>Terrain: {planet.terrain}</p>
        <p>Surface Water: {handleWater()}</p>
        <p>Population: {planet.population}</p>

        </div>
    );
};

export default Planet;
