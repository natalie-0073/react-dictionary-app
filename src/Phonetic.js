import React from "react";
import ReactAudioPlayer from 'react-audio-player';
export default function Phonetic(props){
    if(props.phonetic && props.phonetic.text){
            return (<div className="Phonetic">
                {/* <div className="section"> */}
                {props.phonetic.audio && <ReactAudioPlayer src={props.phonetic.audio} controls/>}
                
            {props.phonetic.text}
           </div>
        //    </div>
           );
        }
         else{
            return null;
        }
        
        
    
}