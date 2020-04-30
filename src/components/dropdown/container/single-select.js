import React, { useState, useEffect } from "react";

import "../dropdown.css";

function SingleSelectFunction({options,defaultMessage,multi,continentAction , selectedValues}){
    const [ displayList, listEnabed ] = useState(false);
    const [ dropList, setDropList] = useState([]);
    useEffect(()=>{
        setDropList(options)
    }, [options])
    const selectOption =(value) => {
            continentAction(value);
    }
    const dropSearch = (e) => {
        const data = options.filter(item => (item.toLowerCase()).indexOf((e.target.value).toLowerCase()) !== -1);
        setDropList(data);
    }

    const list = dropList.map((item,index) => (
        <li key={index} onClick = {() => selectOption(item)}>
            {!multi ? 
                <input type="radio" name="continent" value={item} />
                : <input type="checkbox" name="continent" checked ={selectedValues.includes(item)} />
            }
            {item}
        </li>
    ))
    
    return(
        <div className= "selectDropdown">
            <div onClick = {() => listEnabed(!displayList)}>
                <input type= "text" placeholder = {defaultMessage} onChange = {(e)=> dropSearch(e)} />
            </div>
            {(displayList || multi) &&
                <ul>
                    {list}
                </ul>
            }
        </div>
    );
} 

export const SingleSelect = SingleSelectFunction;