import React from 'react'

const Message = (props) => {
  return (
   <p>You have read <strong>{props.children}</strong> pieces of advice {props.count}</p>
  )
}

export default Message