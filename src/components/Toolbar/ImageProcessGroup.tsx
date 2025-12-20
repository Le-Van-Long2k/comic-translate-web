import React from 'react'

function ImageProcessGroup() {
  return (
    <div className="flex justify-center gap-2 items-center">
      <button className="btn btn-outline btn-info">Detect Text Boxes</button>
      <button className="btn btn-outline btn-info">Get Translation</button>
      <button className="btn btn-outline btn-info">Segment Text</button>
      <button className="btn btn-outline btn-info">Clean Image</button>
      <button className="btn btn-outline btn-info">Render</button>

      </div>
  )
}

export default ImageProcessGroup