import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSideBar from '../components/SideBar/LeftSideBar';
import RightSideBar from "../components/SideBar/RightSideBar";
import { useGetAllProductsQuery } from '../Service/apiSlice';

const Product = () => {
    const navigate = useNavigate();
    const { data } = useGetAllProductsQuery();

    const handleEdit = (e) => {
        navigate('/edit', { state:{data: data}})
    }

  return (
    <div className="flex md:w-[80%] w-full mx-auto">
        <div className='w-[20%] md:block hidden'>
            <LeftSideBar/>
        </div>
        <div className="md:w-[70%] w-full">
            <div className="flex justify-between items-center p-1 bg-[white] border-2 border-[#e5e5e5]">
                <p>This is my edit section</p>
                <button className="bg-[blue] text-[white] px-5 py-2 rounded-[5px]" onClick={handleEdit}>Edit</button>
            </div>
            <div className='flex md:flex-row flex-col md:h-[45%] h-[77%]'>
                <div className="md:w-[65%] w-full bg-[white] border-2 border-[#e5e5e5]">
                    <img src={data?.picture} className="h-[45%]" />
                    <div className="p-4">
                        <h1>{data?.name}</h1>
                        <p className="text-[11px] text-justify">{data?.description}</p>
                    </div>
                </div>
                <div className='md:w-[35%] w-full'>
                    <RightSideBar/>
                </div>
            </div>
            <div className='bg-[white] w-[100%] border-2 border-[#e5e5e5] my-3 p-3'>
                <h1>Video</h1>
                <video className="mx-auto mt-4" width="530" height="360" controls>
                    <source src={data?.video} type="video/mp4"/>
                </video>
            </div>
            <div className='bg-[white] w-[100%] border-2 border-[#e5e5e5] my-3 p-3'>
                <h1>Other Details</h1>
                <div className="mx-auto mt-4" width="530" height="360" controls>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product

// Image
// Title
// Type
// Description