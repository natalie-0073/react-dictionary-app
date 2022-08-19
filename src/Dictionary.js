import React, {useState} from "react";

export default function Dictionary(){
    const [keyword, setKeyword]=useState("");
    function handleKeywordUpdate(event){
        
        setKeyword(event.target.value);
    }
    function search(event){
        event.preventDefault();
        alert(keyword);
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