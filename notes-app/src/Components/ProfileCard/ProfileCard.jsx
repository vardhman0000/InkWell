import React from 'react'
import { getInitials } from '../../../utils/helper'

function ProfileCard({onLogout}) {
  return (
    <div className='flex items-center gap-3'>
        <div className='border-[3px] border-orange-400 rounded-full p-[2px]'>
            <div className='w-10 h-10 flex items-center justify-center rounded-full text-slate-950 font-medium bg-orange-100'>
                {/* {getInitials("STUXNET")} */}
                {getInitials("Vardhman Jain")}
            </div>
        </div>
        <div>
            <p className='text-sm font-medium'>Vardhman</p>
            <button className='text-sm text-orange-700 underline' onClick={onLogout}>
                Logout
            </button>
        </div>
    </div>
  )
}

export default ProfileCard  