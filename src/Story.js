import React from "react";

const Story = ({setShowStory, setStory, story}) =>{
    const restart = () =>{
        setShowStory()
        setStory([])
    }
    return(
        <div>
            <p> There was a {story.color} {story.noun1} who loved a {story.adjective} {story.noun2}. </p>
			<button onClick={restart}>Restart</button>

        </div>
    )
}

export default Story;