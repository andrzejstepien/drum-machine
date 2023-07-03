
export default function DrumPad(props){
    function playAudio(){
        document.getElementById(props.mappedKey).play()
    }
    const sample = new Audio(props.sample)
    return(
        <button className="drum-pad" id={props.sample} onClick={playAudio}>
            {props.mappedKey}
                <audio src={props.sample} 
                    class="clip" 
                    id={props.mappedKey}>            
                </audio>
            </button>
    )

}