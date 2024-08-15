import React from 'react'
import "../loader/loader.css"

function Loader() {
  return (
    <div className="load w-screen h-screen flex justify-center items-center">
    <div className="loader border-4 border-white border-l-blue-400 rounded-full w-12 h-12 spinner"></div>
    </div>
  )
}

export default Loader