import React, { useState } from "react";

import "../dropdown.css"

function SingleSelectFunction({options,defaultMessage,multi,continentAction}){
    const [ displayList, listEnabed ] = useState(false);

    const selectOption =(value) => {
            continentAction(value);
    }

    const list = options.map((item,index) => (
        <li key={index}>
            <div onClick = {() => selectOption(item)}>
            {!multi ? 
                <input type="radio" name="continent" value={item} />
                : <input type="checkbox" name="continent" />
            }
            {item}
            </div>
            
            
        </li>
    ))
    return(
        <div>
            <div onClick = {() => listEnabed(!displayList)}>{defaultMessage}</div>
            {(displayList || multi) &&
                <ul>
                    {list}
                </ul>
            }
        </div>
    );
} 

export const SingleSelect = SingleSelectFunction