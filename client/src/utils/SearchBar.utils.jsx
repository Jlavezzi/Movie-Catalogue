import React, { useContext, useState } from "react";
import { DataContext } from "../Context/Data.context";


const Searchbar = ()=>{
    const {setQuery, Query} =  useContext(DataContext); //get setQuery functtion from datacontext
    const [inputValue, setinputValaue] = useState(''); //stste for values input into serch abr
    const [category, setCategory]= useState('all'); 
    //handle search button click

    const handleSearch = ()=>{
         setQuery(inputValue)
         console.log(Query); }; //update query in context

    return(
        <div>
            <input type="text"
            value={inputValue}
            onChange={(e)=> setinputValaue(e.target.value)} //update input value state 
            placeholder="search movie catalogue"
            />

            <button onClick={handleSearch}> search</button>
        </div>
    );

};

export default Searchbar;
