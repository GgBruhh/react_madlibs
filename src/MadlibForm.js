import React, {useState} from "react";
import Madlib from "./Madlib";

const MadlibForm = ({createStory, setShowStory}) =>{
    const INITIAL_STATE = {
        noun1: "",
        noun2: "",
        adjective: "",
        color: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);


    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(data =>({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        createStory({...formData})
        setFormData(INITIAL_STATE);
        setShowStory()
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="noun1">First Noun: </label>
                <input
                type="text"
                name="noun1"
                placeholder="noun"
                id="noun1"
                value={formData.noun1}
                onChange={handleChange}
                />

                <label htmlFor="noun2">Second Noun: </label>
                <input
                type="text"
                name="noun2"
                placeholder="noun"
                id="noun2"
                value={formData.noun2}
                onChange={handleChange}
                />

                <label htmlFor="adjective">Adjective: </label>
                <input
                type="text"
                name="adjective"
                placeholder="adjective"
                id="adjective"
                value={formData.adjective}
                onChange={handleChange}
                />

                <label htmlFor="color">Color: </label>
                <input
                type="text"
                name="color"
                placeholder="color"
                id="color"
                value={formData.color}
                onChange={handleChange}
                />
                
                <button onClick={handleSubmit}>Submit!</button>

            </form>
        </div>
    )

}


export default MadlibForm;