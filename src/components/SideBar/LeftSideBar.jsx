import React from 'react';
import { FaArtstation, FaUser, FaBuilding } from "react-icons/fa";
import { useGetAllProductsQuery } from '../../Service/apiSlice';

const SideBar = () => {
  const { data } = useGetAllProductsQuery();
  
  return (
    <div className='bg-[white] p-3'>
      <div className='flex items-center'>
        <img src={data?.user.profilePicture} className="w-[35%] rounded-[100%]" alt="ProfilePix"/>
        <div className='ml-[5px]'>
          <h5 className='text-[14px] text-bolder'>{data?.user.firstName} <span>{data?.user.lastName}</span></h5>
          <p className="text-[10px]">{data?.user.position}</p>
        </div>
      </div>
      <div className="text-[12px] mt-5">
        <div className='flex items-center my-3'>
          <FaArtstation/>
          <p className='ml-2'>Home</p>
        </div>
        <div className='flex items-center my-3'>
          <FaUser/>
          <p className='ml-2'>Member</p>
        </div>
        <div className='flex items-center my-3'>
          <FaBuilding/>
          <p className='ml-2'>Organization</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
