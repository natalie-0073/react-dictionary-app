import axios from "axios";
import React, {useState} from "react";

export default function Dictionary(){
    const [keyword, setKeyword]=useState("");
    function handleKeywordUpdate(event){
        
        setKeyword(event.target.value);
    }
    function handleResponse(response){
        console.log(response.data[0]);
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
                <input type="search" onChange={handleKeywordUpdate}/>
                <button>Submit</button>
            </form>
            </div>
        </div>
    );
}