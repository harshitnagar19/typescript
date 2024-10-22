import React from 'react'
import { FC } from 'react'

type buttonProps= {   //creating own type
  //  readonly _id :number;   //readonly can allow to set value once then you can not be able to change value of it
    text:string|number;   //here we are using union which specify text is can be either string or number
    onClick?: ()=> void   // onclick accpect a function of return type void
                      
}
//FC is a predefined type in react that means FunctionalComponent 
// in <> angular braces  we give a type that must be prop in the form of
const Button:FC<buttonProps> = (props) => {
    const {text,onClick} = props;
  return (
    <div>
      <button onClick={onClick}>{text} </button>
    </div>
  )
}

export default Button
