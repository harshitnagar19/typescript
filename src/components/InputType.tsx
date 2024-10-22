import React, { FC, useState } from 'react'

const InputType:FC = () => {
    const [value , setValue] = useState<string>() 

    function handleSubmit(e:React.FormEvent<HTMLFormElement>):void{
        e.preventDefault()
        console.log(value)
        }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type="text" 
      value={value}
      placeholder='enter string'
      onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
      }}
      />
      <button type='submit'>submit</button>
      </form>
      <h1>{value}</h1>
    </div>
  )
}

export default InputType
