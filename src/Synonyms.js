import React from "react";
import "./Synonyms.css";
export default function Synonyms(props){
    
    if(props.synonyms.length>0){
        
        return (
            <div className="Synonyms">
                <div className="section">
                <h3>synonyms</h3>
            {props.synonyms.map(function(synonym,index){
                return(
                    <div key={index} className="word">{synonym}</div>
                     
                );
            })}
</div>
</div>);
    }
    else{
return null;
    }
}