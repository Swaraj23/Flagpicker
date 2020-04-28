import React, { useEffect, useState, useMemo } from "react"
import {SingleSelect} from "./components/dropdown"
import Data from "./data/continents.json"



function FlagPickerContainer(){
    let [data, setData] = useState([]);
    let [continent , setContinent] = useState([]);
    let [countryList , setCountryList] = useState([]);
    let [selectedCountry , getSelectedCountry] = useState([]);
    let [dropValues , getDropValues] = useState([]);

    const getContinentList = (d) =>{
        const list= d.map((item)=> (
            item.continent
        ));
        return list;
    };

    const dispenseCallback = useMemo(()=> getContinentList(Data),[]);
    
    useEffect(()=>{
        setData(Data);
    }, []);

    const continentValues =(values) => {
        setContinent(values);
        data.forEach((item) =>{
            if(item.continent === values){
                const contryData = item.countries.map((contry) => (
                     contry.name
                ))
                setCountryList(contryData);  
            }
        });
       
    }

    const getCountrySelected = (values) => {
        
    }

    
        return(
            <div className="container">
                {data.length > 0 && 
                    <div className="continent">
                        <h3>Step1</h3>
                        <SingleSelect
                            defaultMessage = "Select a continent"
                            options = {dispenseCallback}
                            continentAction = {(e) => continentValues(e)}
                        />
                    </div>
                }
                
                <div className = "contries">
                {countryList.length > 0 && 
                    <div className="country">
                        <h3>Step 2</h3>
                        <SingleSelect
                            defaultMessage = "Select Contries"
                            multi
                            options = {countryList}
                            continentAction = {(e) => continentValues(e)}
                        />
                    </div>
                }
                </div>
                <div className="flags"></div>
                
            </div>
        )
    
}
export const FlagPicker = FlagPickerContainer