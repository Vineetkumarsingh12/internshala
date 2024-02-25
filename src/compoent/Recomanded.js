import React from 'react'
import image from '../assest/a.png';

const Recomanded = () => {
  return (
<div className='w-[333px] h-[425px] border p-4 flex flex-col gap-3 items-center'>
  <div> 
    <img src={image} alt="img" />
  </div>
  {/* tag */}
  <div>
    <span className='bg-[#F2F4F7] p-1 rounded text-[15px] m-1'>20% Off</span>
    <span className='bg-[#F2F4F7] p-1 rounded m-1'>Limited time</span>
  </div>
  <p>Webbuilder 1</p>
  <p>Computer Modern clasic with wix support</p>

  {/* price details */}
  <div className='flex gap-2 items-end'>
    <p className=' text-lg'>$39.96</p>
    <div className='text-[14px] flex gap-2'>
      <p className='text-[#9FA9B3]'>$49.96</p>
      <p className=' text-[#EF4C5D]'>(20% Off)</p>
    </div>
  </div>
  <button className='w-full bg-[#1B88F4] rounded-lg p-2 text-white'>View Deal</button>
</div>

  )
}

export default Recomanded
