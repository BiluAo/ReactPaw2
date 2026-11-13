import React, {useState} from 'react'

const Counter = () => {
    const [angka, setAngka]= useState(0)
  return (
    <div>
        <h1>{angka}</h1>
     <button className="btn btn-secondary+">INC</button>
    </div>
  )
}

export default Counter
    