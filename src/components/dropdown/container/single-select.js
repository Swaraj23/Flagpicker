import React, { useState, useEffect } from "react";

import "../dropdown.css";

function SingleSelectFunction({options,defaultMessage,multi,continentAction , selectedValues}){
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
                <input type="radio" id={item+"_"+index} name="continent" value={item} />
                : <input id={item+"_"+index} type="checkbox" name="continent" defaultChecked ={selectedValues.includes(item)} />
            }
            <label htmlFor={item+"_"+index}>{item}</label>
        </li>
    ))
    
    return(
        <div className= "selectDropdown">
            <div>
                <input type= "text" placeholder = {defaultMessage} onChange = {(e)=> dropSearch(e)} />
            </div>
            <ul>
                {list}
            </ul>
        </div>
    );
} 

export const SingleSelect = SingleSelectFunction;