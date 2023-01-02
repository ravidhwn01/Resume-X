import React from 'react'

const InputText = (props: any) => {
  return (
    <>
      <input type={props.type} className={props.className} id={props.id} placeholder={props.placeholder} />

    </>
  )
}

export default InputText