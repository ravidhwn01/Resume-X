import React from 'react'

const TextArea = (props:any) => {
  return (
    <>
    <textarea rows={props.rows} className = {props.className} placeholder={props.placeholder}></textarea>
    </>
  )
}

export default TextArea