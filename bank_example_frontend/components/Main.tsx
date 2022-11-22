import { FC, useState } from "react";

//Prop interface goes here

const Main: FC = () => {
    const [getCounter, setCounter] = useState<number>(0);
//Add a minus 1 button 
//Add another state starting value string 100
//Create 3 buttons that each effect the second state different. 
// <Bonus> Add a text field and button to change the counter to the value in the filed. 
    return(
        <div>
        <h1> Main </h1>
        <p> Counter: {getCounter} </p>
        <button onClick={() => {
            setCounter(getCounter + 1)
        }}> Click Me</button>
        </div>
    )
}

export default Main
