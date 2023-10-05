import React, {useState} from "react";

function Tile({hog}){
    const [isClicked, setIsClicked] = useState(false)

    function handleClick(event){
        setIsClicked((currentValue)=> !currentValue)
    }
    const addedDetails = [
        <h3>Specialty: {hog.specialty}</h3>,
        <h3>Weight: {hog.weight}</h3>,
        <h3>Greased: {hog.greased.toString()}</h3>,
        <h3>Highest Medal Achieved: {hog["highest medal achieved"]}</h3>
    ]

    return(
        <li className="pigTile" onClick={handleClick}>
            <h3>{hog.name}</h3>
            <img src={hog.image}/>
            {isClicked ? addedDetails : null}
        </li>
    )
}

export default Tile;