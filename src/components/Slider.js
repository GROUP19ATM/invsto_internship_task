import React from 'react';
import './Slider.css';
import { useState } from "react";

export default function (props) {
  
  return (
    <div>
        <input value = {props.val} type="range" className="range" min="0" max="8" step="2" onChange={(e) => {props.setVal(e.target.value)}}/>
    </div>
  )
}
