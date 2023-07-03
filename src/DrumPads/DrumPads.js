import drum1 from "../samples/Cev_H2.mp3"
import drum2 from "../samples/Dsc_Oh.mp3"
import drum3 from "../samples/Heater-1.mp3"
import drum4 from "../samples/Heater-2.mp3"
import drum5 from "../samples/Heater-3.mp3"
import drum6 from "../samples/Heater-4_1.mp3"
import drum7 from "../samples/Heater-6.mp3"
import drum8 from "../samples/Kick_n_Hat.mp3"
import drum9 from "../samples/RP4_KICK_1.mp3"


import DrumPad from "./DrumPad"
export default function DrumPads(props){
    const sampleMap = [
        {sample:drum1,key:"Q"},
        {sample:drum2,key:"W"},
        {sample:drum3,key:"E"},
        {sample:drum4,key:"A"},
        {sample:drum5,key:"S"},
        {sample:drum6,key:"D"},
        {sample:drum7,key:"Z"},
        {sample:drum8,key:"X"},
        {sample:drum9,key:"C"},
    ]
    function handleKeyDown(event){
        const pressedKey = event.code[3]    
        if(sampleMap.some(obj=>{
            return obj.key === pressedKey
        })){
            playAudio(pressedKey)   
        }
                
    }      
    function playAudio(id){
        document.getElementById(id).play()
        props.setPlaying(
            sampleMap.filter(obj=>{
                return obj.key===id
            })[0]
            .sample
        )
    }
   const drumPads = sampleMap.map((e,i)=>{
        return (<DrumPad 
            key={i} 
            sample={e.sample} 
            mappedKey={e.key}
            playAudio={playAudio}
            />)
    })

    return(
        <>
        <div onKeyDown={handleKeyDown} id="drum-pad-container">
        {drumPads}
        </div>
        </>
    )
}