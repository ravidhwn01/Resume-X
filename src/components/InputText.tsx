import React from 'react'

const InputText = (props:any) => {
  return (
    <>
      <input type={props.type} id = {props.id} placeholder = {props.placeholder} />
      <br />
    </>
  )
}

export default InputText