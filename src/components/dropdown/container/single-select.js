import React, { useState } from "react";

import "../dropdown.css"

function SingleSelectFunction({options,defaultMessage,multi,continentAction}){
    const [ displayList, listEnabed ] = useState(false);
    const [selectValues, getValues] = useState([])

    const filterValues =() => {

    }

    const selectOption =(value) => {
        if(!multi){
            getValues([value]);
            continentAction(value)
        }
    }

    const list = options.map((item,index) => (
        <li key={index} onClick={()=>filterValues(item)}>
            <div onClick = {() => selectOption(item)}>
            {!multi ? 
                <input type="radio" name="continent" value={item} />
                : <input type="checkbox" name="continent" />
            }
            {item}
            </div>
            
            
        </li>
    ))
        // console.log("displayList",displayList)
    return(
        <div>
            <div onClick = {() => listEnabed(!displayList)}>{defaultMessage}</div>
            {displayList &&
                <ul>
                    {list}
                </ul>
            }
        </div>
    );
} 

export const SingleSelect = SingleSelectFunction