import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar({page}) {
  return (
    <div className="w-full bg-black flex justify-center items-center p-6">
      <div className='w-[80%] flex justify-around text-3xl shadow-[-1px_0px_16px_7px_#90cdf4] border-b-3 border-blue-400 p-4 rounded-lg'>

        {page == "Home"? <Link to="/" className='text-sky-200'>Home</Link>:<Link to="/" className='text-slate-500'>Home</Link>}

        {page == "Members"? <Link to="/Members" className='text-sky-200'>Members</Link>:<Link to="/Members" className='text-slate-500'>Members</Link>}

        {page == "Events"? <Link to="/Events" className='text-sky-200'>Events</Link>:<Link to="/Events" className='text-slate-500'>Events</Link>}

        {page == "Teams"? <Link to="/Teams" className='text-sky-200'>Teams</Link>:<Link to="/Teams" className='text-slate-500'>Teams</Link>}

        {page == "About"? <Link to="/About" className='text-sky-200'>About</Link>:<Link to="/About" className='text-slate-500'>About</Link>}

      </div>
    </div>
  )
}
