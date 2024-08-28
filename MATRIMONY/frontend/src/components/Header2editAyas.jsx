import React from 'react'

const Header2edit = ({ title }) => {
  return (
    <div>
      <div className="grid grid-cols-1 h-24 bg-pink-950">
        <div className="  "><p className="absolute left-4"><img src="/assets/Images/newglass.jpeg" alt="" className="h-8 w-8 rounded-full mt-4 bg-purple-950" ></img></p></div>
        <div>
          <div className="place-content-center "><p className=" -mt-8 font-bold text-white place-content-center text-center text-2xl"><header>{title}</header></p></div>

        </div>

      </div>
      <div className='grid grid-cols-1 bg-white h-7 rounded-t-full -my-6'></div>
    </div>
  )
}

export default Header2edit
