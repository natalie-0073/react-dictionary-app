import React from "react";
export default function Synonyms(props){
    console.log(props.synonyms);
    if(props.synonyms.length>0){
        
        return (
            <div className="Synonyms">
                Synonyms:
            {props.synonyms.map(function(synonym,index){
                return(
                    
                    
                    <div key={index}>{synonym}</div>
                    
                    
                );
            })}

</div>);
    }
    else{
return null;
    }
}