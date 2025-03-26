import React from "react"; 

function MoodDisplay({ mood }){

    const moods ={
      HAPPY: "JUST SMILE HEHEE😍",
      SAD: "JUST MOVE ON🥲",
      HUNGRY:"I WANT SOME FOOD🤨",
      UGLY:"I AM TO BAD!!🫥",
    };
    return ( <div>{console.log(moods[mood])}
    {mood ?<p>{moods[mood]}</p> : <p>Select your mood above</p>}
    </div>
     );
}
export default MoodDisplay;