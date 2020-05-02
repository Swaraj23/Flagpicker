import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import {SingleSelect} from "../index";

let container = null;

beforeEach(()=>{
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("Renders with Value", () => {
    const dropValues = ["one"];
    act(() => {
        render(<SingleSelect options = {dropValues}/> , container )
    })
    expect(container.querySelector("label").textContent).toBe(dropValues[0]);
})

// it("change value on select", () =>{
//     const dropValues=["two"];
//     act(()=> {
//         render(<SingleSelect options={dropValues})
//     })
// })