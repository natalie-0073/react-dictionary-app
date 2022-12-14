import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props){
    console.log(props.meaning.synonyms);
    return(
        <div className="Meaning">
            <div className="section">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                        <p>{definition.definition}
                        <br />
                        <em>{definition.example}</em>
                        </p>
                        
                    </div>
                );
            })}
            </div>
            
            
            <Synonyms synonyms={props.meaning.synonyms}/>
            

        </div>
    );
}