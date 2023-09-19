import React, {useState} from "react";
import {v4 as uuid} from "uuid"
import useToggleState from "./hooks/useToggleState"
import MadlibForm from "./MadlibForm";
import Story from "./Story";

const Madlib = () =>{
    const [story, setStory] = useState();
    const [showStory, setShowStory] = useToggleState(false);

   const createStory = (newStory) => {
		setStory((entries) => [...entries, { ...newStory, id: uuid() }]);
	}; 

    return(
        <div>
            {showStory ? (
                <Story setShowStory={setShowStory} 
                setStory={setStory} 
                story={story[0]}/>
            ) : (
                <MadlibForm 
                createStory={createStory}
                setShowStory={setShowStory}/>
            )}
        </div>
    )
}

export default Madlib;   