import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(){
    const [keyword, setKeyword]=useState("");
    const [results, setResults]=useState(null);
    function handleKeywordUpdate(event){
        
        setKeyword(event.target.value);
    }
    function handleResponse(response){
        
        setResults(response.data[0]);
    }
    function search(event){
        event.preventDefault();
        
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        
        axios.get(apiUrl).then(handleResponse);
    }
    return (
        <div className="Dictionary">
            <div className="container">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordUpdate} className="search-input"/>
                <button className="search-button">Submit</button>
                <Results results={results}/>
            </form>
            </div>
        </div>
    );
}