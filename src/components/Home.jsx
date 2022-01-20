import React, {useState} from 'react';
import {useHistory} from "react-router-dom"

const Home = () => {
    const [type, setType] = useState("");
    const [num, setNum] = useState("");
    const history = useHistory();

    const sendSearch = (e) => {
        e.preventDefault();
        history.push("/"+type+"/"+num);

    }


    return (
        <div>
        <h3>Placeholder for Home Search Bar</h3>
        <form onSubmit={ sendSearch }>
        <label>Select a Person or Planet: </label>
        <select id="type" onChange={ (e) => setType(e.target.value) }>
            <option value="people">People</option>
            <option value="planets">Planets</option>
        </select>
        <label>ID: </label>
        <input type="number" onChange={ (e) => setNum(e.target.value) }></input>
        <button>Search!</button>
        </form>

        </div>
    );
};

export default Home;
