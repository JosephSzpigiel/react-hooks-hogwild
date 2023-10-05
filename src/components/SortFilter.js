import React, {useState} from "react";

function SortFilter({onChangeHandler}){
    return(
        <div>
            <label>Filter Greased Pigs </label>
            <input type="checkbox" onChange={onChangeHandler}/>
        </div>
    )
}

export default SortFilter;