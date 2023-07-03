
export default function DrumPad(props){
 
       
    return(
        <button className="drum-pad" 
                id={props.sample} 
                onClick={()=>props.playAudio(props.mappedKey)}
                >
            {props.mappedKey}
                <audio src={props.sample} 
                    className="clip" 
                    id={props.mappedKey}>            
                </audio>
            </button>
    )

}