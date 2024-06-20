import React, { useContext } from "react";
import { DataContext } from "../Context/Data.context";

const searchbar = ()=>{
    const {setQuery} =  useContext(DataContext); //get setQuery functtion from datacontext
    const [inputValue, setinputValaue] = useState(''); //stste for values input into serch abr

    //handle search button click

    const handleSearch = ()=> setQuery(inputValue); //update query in context

    return(
        <div>
            <input type="text"
            value={inputValue}
            onChange={(e)=> setinputValaue(e.target.value)} //update input value state 
            />

            <button onClick={handleSearch}> search</button>
        </div>
    );

};

export default searchbar;
