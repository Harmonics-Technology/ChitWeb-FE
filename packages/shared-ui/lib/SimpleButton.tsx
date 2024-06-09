
import React from 'react'

function SimpleButton({callback}:{callback: () => void}) {
  return (
    <button onClick={callback}> click here</button>
  )
}

export default SimpleButton;
