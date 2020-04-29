import React, { useState, useMemo } from "react"
import {SingleSelect} from "./components/dropdown"
import Data from "./data/continents.json"



function FlagPickerContainer(){
    let [data, setData] = useState({});
    let [continent , setContinent] = useState("");
    let [countryList , setCountryList] = useState([]);
    let [selectedCountry , getSelectedCountry] = useState([]);
    let [flagList , setFlags] = useState([])

    const getContinentList = (d) =>{
        const worldData = {};
        const list= d.map((item)=> {
            worldData[item.continent] = item.countries;
            return item.continent;
        });
        setData(worldData);
        return list;
    };

    const dispenseCallback = useMemo(()=> getContinentList(Data),[]);
    
    // useEffect(()=>{
    //     setData(Data);
    // }, []);
    const continentValues =(values) => {
        setContinent(values);
        const contryData = data[values].map((item) =>(
            item.name
        ));
        setCountryList(contryData);  
    }

    const getCountrySelected = (values) => {
        let arr = [...selectedCountry]
        if(arr.includes(values)){
            arr = arr.filter(item => item !== values);
        }else{
            arr.push(values);
        }
        if(arr.length > 0){
            const flags = data[continent].map((item)=>{
                if(arr.includes(item.name)){
                    return item.flag;
                }else{
                    return null;
                }
            })
            setFlags(flags)
        }else{
            setFlags([])
        }
        getSelectedCountry(arr);

    }

    const clearFlags = () => {
        getSelectedCountry([]);
        setFlags([]);
    }

    return(
        <div className="container">
            <div className="continent">
                <h3>Step1</h3>
                <SingleSelect
                    defaultMessage = "Select a continent"
                    options = {dispenseCallback}
                    continentAction = {(e) => continentValues(e)}
                />
            </div>
            
            <div className = "contries">
            {continent !== "" && 
                <div className="country">
                    <h3>Step 2</h3>
                    <SingleSelect
                        defaultMessage = "Select Contries"
                        multi
                        options = {countryList}
                        continentAction = {(e) => getCountrySelected(e)}
                    />
                </div>
            }
            </div>
            <div className="flags">
                {flagList.length > 0 && 
                    <React.Fragment>
                        <h3>Selected Flags</h3>
                        {flagList.map((item , index) => (
                            <span key={index}>{item}</span>
                        ))}
                        <input type="button" defaultValue="Clear Flags" onClick={()=> clearFlags()}/>
                    </React.Fragment>
                }
            </div>
        </div>
    )
    
}
export const FlagPicker = FlagPickerContainer