import React from 'react'

const TextArea = (props:any) => {
  return (
    <>
    <textarea  className = {props.className} placeholder={props.placeholder}></textarea>
    </>
  )
}

export default TextArea