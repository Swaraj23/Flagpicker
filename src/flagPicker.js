import React from "react"
import {Dropdown} from "./components/dropdown"
export class FlagPickerContainer extends React.PureComponent{
    render(){
        return(
            <div>
                <Dropdown/>
            </div>
        )
    }
}



export const FlagPicker = FlagPickerContainer