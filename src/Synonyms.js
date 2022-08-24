import React from "react";
export default function Synonyms(props){
    console.log(props.synonyms);
    if(props.synonyms){
        
        return (
            <div className="Synonyms">
            {props.synonyms.map(function(synonym,index){
                return(
                    <div>
                    <ul>
                    <li key={index}>{synonym}</li>
                    </ul>
                    </div>
                );
            })}

</div>);
    }
    else{
return null;
    }
}