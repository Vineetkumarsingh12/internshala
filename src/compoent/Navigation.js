import React from 'react'
import { options2 } from '../assest/data'
import { FaAngleRight } from "react-icons/fa";
const Navigation = () => {
  return (
    <div className='flex gap-1 items-center my-4'>
      {
        options2.map((item, index) => {
          return (
            <>
                <p key={item}>{item}</p>
{
    index!==options2.length-1 && <FaAngleRight />

}
                </>
            
          )
        })
      }
    </div>
  )
}

export default Navigation
