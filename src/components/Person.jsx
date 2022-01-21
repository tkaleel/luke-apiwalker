import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Person = (props) => {
    const [person, setPerson] = useState({});

    const { number } = useParams();

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + number)
            .then(response => {
                console.log(response.data);
                setPerson(response.data);
            })
            .catch(error => console.log(error))
    }, [number]);

    return (
        <div>
            <h3>{person.name}</h3>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
        </div>
    );
};

export default Person;
