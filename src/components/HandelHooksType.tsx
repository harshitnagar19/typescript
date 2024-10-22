import React, { FC, useState } from 'react'

const HandelHooksType:FC = () => {
    const [value , setValue ] = useState<number>(1)
  return (
    <div>
      <h3>{value}</h3>
      <button 
      onClick={()=>{
        setValue(value+1)
      }}
      >inc</button>
    </div>
  )
}

export default HandelHooksType


