import React from 'react';
import { useGetAllProductsQuery } from '../../Service/apiSlice';
import { MdEditLocation } from "react-icons/md";

const SideBar = () => {
    const { data } = useGetAllProductsQuery();
  return (
    <div className='bg-[white] p-3 h-[80vh]'>
      <h1 className='pb-3'>Offered By</h1>
      <img src={data?.company.logo} alt="Logo" className='w-[90%]'/>

      <div className='bg-[white] p-3'>
      <div className='flex items-center'>
        <img src={data?.user.profilePicture} className="w-[35%] rounded-[100%]" alt="ProfilePix"/>
        <div className='ml-[5px]'>
          <h5 className='text-[14px] text-bolder'>{data?.user.firstName} <span>{data?.user.lastName}</span></h5>
          <p className="text-[10px]">{data?.user.position}</p>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center mb-5">
            <MdEditLocation className='text-[40px] text-[blue]'/>
            <p className="text-[12px] ml-2">441 Ozumba Nbadiwe, Victoria Island, Lagos</p>
        </div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31714.163037362705!2d3.3865085170776466!3d6.487405351835488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1688588121110!5m2!1sen!2sng" 
            width="100%" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      </div>
    </div>
  )
}

export default SideBar