import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props){
    const [keyword, setKeyword]=useState(props.defaultKeyword);
    const [results, setResults]=useState(null);
    const [loaded, setLoaded]=useState(false);
    function handleKeywordUpdate(event){
        
        setKeyword(event.target.value);
    }
    function handleResponse(response){
        
        setResults(response.data[0]);
    }
    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function search(){
        
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        
        axios.get(apiUrl).then(handleResponse);
        
    }
    function load(){
        setLoaded(true);
        search();
    }
        if(loaded){
        return (
            <div className="Dictionary">
                <div className="container">
                    <div className="section">
                        <h2 className="title">What word do you want to look up?</h2>
                <form onSubmit={handleSubmit} className="text-center">
                    <input type="search" onChange={handleKeywordUpdate} className="search-input" defaultValue={props.defaultKeyword}/>
                    <button className="search-button">Submit</button>
                    
                </form>
                </div>
                
                <Results results={results}/>
                
                <footer className="fixed-bottom"><a target="_blank"rel="noreferrer"href="https://github.com/natalie-0073/react-dictionary-app.git">Open-source code</a> by Nataliia Chala</footer>
                </div>  
               
            </div>
        );
        
    }
    else{
        load();
        return "Loading..";
    }
    
}