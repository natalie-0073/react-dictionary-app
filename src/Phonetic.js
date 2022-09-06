import React from "react";
import "./Phonetic.css";
export default function Phonetic(props){
    if(props.phonetic && props.phonetic.text){
            return (<div className="Phonetic">
             
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer" className="audio-link">Listen</a>
                
           <span> {props.phonetic.text}</span>
           </div>
        
           );
        }
         else{
            return null;
        }
        
        
    
}