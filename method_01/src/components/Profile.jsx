import React, { useContext } from 'react'
import userContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(userContext)
  return (
    user ? <div className='text-center text-2xl bg-slate-700 text-white mt-8'>hello {user.username}</div > : <div className=' mt-8 text-center text-2xl bg-slate-700 text-white'> "please login"</div>
  )
}

export default Profile