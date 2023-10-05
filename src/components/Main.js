import React, {useState} from "react";
import Tile from "./Tile";
// import SortFilter from ".SortFilter"


function Main({hogs}){
    const [filteredHogs, setFilteredHogs] = useState([...hogs])

    return (
        <div>
            {filteredHogs.map((hog)=>{
                return <Tile key={filteredHogs.indexOf(hog)} hog={hog} />
            })}
        </div>
    )
}

export default Main;