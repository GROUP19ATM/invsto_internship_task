import React from 'react';

export default function Top(props) {
  return (
    <div>
        <div className='top-outer'>
            <p className='top1'>Simple, Traffic-based Pricing</p>
            <p className='top2' style = {props.t2c === "light" ? {color: "grey"} : {color: "hsl(225, 20%, 60%)"}}>Sign up for our 30 day trial. No credit card required</p>
        </div>
    </div>
  )
}
