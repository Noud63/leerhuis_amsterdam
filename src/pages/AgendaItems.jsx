import React from 'react'
import { Link } from 'react-router-dom'

const AgendaItems = () => {
  return (
    <div className="w-full h-[500px] flex justify-center items-center  mt-8">
      <Link to="/"><span className="text-4xl">Back</span></Link>
    </div>
  )
}

export default AgendaItems
