import React from 'react';
import image from '../assest/a.png';
import{FaAngleDown} from 'react-icons/fa';
import ReactStars from 'react-stars'
import { IoIosInformationCircleOutline } from "react-icons/io";



const Card = ({tag,icon,Bulider,number,rating,texts}) => {
  return (
    <div className='flex h-[255px] my-10 justify-between  rounded relative '>
        <div className='absolute rounded-full border-black border h-[30px] aspect-[1] text-center text-xl left-[-5px] top-[50px]'>{number}</div>
     {
      tag && <div className='absolute bg-orange-600 rounded p-1 text-white flex items-center gap-1'>
        {icon}
      <p >{tag} </p>
      </div>
     } 

      {/* image section */}
      <div className='w-[20%] p-5 pt-10'>
      <img src={image} alt="img" />
      <p className=' text-center mt-10'>{Bulider}</p>
      </div>
      <div className='w-[50%]'>
    <span className=' font-bold'>
      {
texts[0]
      }
    </span>
    <span>
      {
texts[1]
      }
    </span>
    <div className=' font-bold my-2'>Main highlights</div>
    {
     texts[2]!=='' ? <div className=' pl-4'>{texts[2]}</div>:
     (<><div className=' bg-[#FFF4ED] rounded p-2 ml-4 '>
    <p><span className=' bg-white p-1 text-[#1B88F4]'>9.9</span> <span>Building responsive</span></p>
    <p><span className=' bg-white p-1 text-[#1B88F4]'>8.9</span> <span>Cools</span></p>
    <p><span className=' bg-white p-1 text-[#1B88F4]'>8.9</span> Docs<span></span></p>
     </div>
     <div>
<p>Why we love it</p>
<p><span className=' bg-white p-1 text-[#1B88F4]'>✔️</span> Doumentation<span></span></p>
<p><span className=' bg-white p-1 text-[#1B88F4]'>✔️</span> Easy Use<span></span></p>
<p><span className=' bg-white p-1 text-[#1B88F4]'>✔️</span> Out of box<span></span></p>
     </div>
     </>
     )


    }
     <div className='flex items-center  text-[#1B88F4]'><p>Show more</p> <FaAngleDown/> </div>
      </div>


      <div className='w-[20%] flex flex-col  justify-between h-[100%]'>
  <div className='bg-[#F3F9FF] flex flex-col items-center'>
    <IoIosInformationCircleOutline className='relative right-[-20px]' />
    <div className='text-3xl'>{rating[0]}</div>
    <div>
      <ReactStars count={5} size={24} color2={'#ffd700'} value={rating[0]-5} edit={false} />
      <p className=' text-center'>{rating[1]}</p>
    </div>
  </div>
  
  <button className='bg-[#1B88F4] text-white rounded-lg p-2'>View</button>
</div>

    </div>
  )
}

export default Card
