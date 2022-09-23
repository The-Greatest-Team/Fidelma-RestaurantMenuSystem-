import React from 'react'
import ReactDOM from 'react-dom'
import BackDrop from '../components/BackDrop'
import {isTSAnyKeyword} from '@babel/types';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<BackDrop></BackDrop>,div)
})

