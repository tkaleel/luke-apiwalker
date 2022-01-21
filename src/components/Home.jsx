import React, { useState } from 'react';
import { useHistory } from "react-router-dom"

const Home = () => {
    const [type, setType] = useState("people");
    const [num, setNum] = useState("1");
    const history = useHistory();

    const sendSearch = (e) => {
        e.preventDefault();
        history.push("/" + type + "/" + num);

    }


    return (
        <div>
            <h3>Home</h3>
            <form onSubmit={sendSearch}>
                <label>Select a Person or Planet: </label>
                <select value={type} id="type" onChange={(e) => setType(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID: </label>
                <input value={num} type="number" onChange={(e) => setNum(e.target.value)}></input>
                <button>Search!</button>
            </form>

        </div>
    );
};

export default Home;
