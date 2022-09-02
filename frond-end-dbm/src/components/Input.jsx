import React from 'react'

const Input = (props) => {

  return (
    <div>
    {/* is very important for INPUT reuse components
    onChange={(e)=> props.chanageHandler(e, props.name)}  */}    
      <input onChange={(e)=> props.chanageHandler(e, props.name)} value={props.value} type={props.type} name={props.name} id={props.id} placeholder={props.placeholder}  style={{width:'100%', marginBottom:'12px', height:'40px', borderBottom:'1px solid #b6c6ed'}}/>
    </div>
  )
}

export default Input
