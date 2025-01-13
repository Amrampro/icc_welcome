import React from 'react'
import Backbtn from '../components/Backbtn'

const RdvPastoral = () => {
  return (
    <div>
      <Backbtn />
      <iframe
        className="w-full h-screen mt-16"
        src="https://forms.gle/XYCgxpYBe6qKovjv7"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default RdvPastoral
