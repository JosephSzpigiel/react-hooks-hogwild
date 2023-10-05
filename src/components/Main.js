import React, {useState} from "react";
import Tile from "./Tile";
import SortFilter from "./SortFilter"


function Main({hogs}){
    const [filteredHogs, setFilteredHogs] = useState([...hogs])

    function changeHandler(e){
        setFilteredHogs(hogs.filter((hog)=>{
            console.log(e.target.checked)
            if (e.target.checked === true){
                return hog.greased
            }else{
                return true
            }
        }
        ))
    }

    function changeHandlerSort(e){
        setFilteredHogs((currentValue)=>{
            if( e.target.value === "Weight"){
                return [...currentValue].sort((pig1.weight, pig2.weight) => (pig1.weight - pig2.weight))
            }
        })
    }

    return (
        <div>
            <SortFilter onChangeHandler={changeHandler}/>
            <ul>
                {filteredHogs.map((hog)=>{
                    return <Tile key={filteredHogs.indexOf(hog)} hog={hog} />
                })}
            </ul>
        </div>
    )
}

export default Main;