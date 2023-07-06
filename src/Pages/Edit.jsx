import React, {useState} from 'react';
import LeftSideBar from '../components/SideBar/LeftSideBar';
import RightSideBar from "../components/SideBar/RightSideBar";
import {useLocation} from 'react-router-dom';
import { useUpdateProductMutation } from '../Service/apiSlice';
import { useNavigate } from 'react-router-dom';


const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;

  const [ product, setProduct ] = useState({
    id:data?.id,
    name:data?.name,
    description:data?.description,
    video:data?.video
  });


  const [ updateProduct ] = useUpdateProductMutation();

  const handleChange = (e) => {
      const {name, value } = e.target;
      setProduct({...product,
          [name]: value
      })
  }

  const updateInfo = (e) => {
    e.preventDefault();
    updateProduct(product);
    navigate('/product')
  }

  return (
    <div className="flex md:w-[80%] w-full mx-auto">
        <div className='w-[20%] md:block hidden'>
            <LeftSideBar/>
        </div>
        <div className="md:w-[70%] w-full">
            <div className="flex justify-between items-center p-1 bg-[white] border-2 border-[#e5e5e5]">
                <p>Title</p>
                <button className="bg-[blue] text-[white] px-5 py-2 rounded-[5px]">View Offer</button>
            </div>
            <div className='flex md:flex-row flex-col h-[70%]'>
                <div className="md:w-[65%] w-full bg-[#ffffff] border-2 border-[#e5e5e5]">
                    <img src={data?.picture} className="w-[100%] h-[350px]"  />
                    <div className="p-4">
                        <input name="name" value={product.name} className='border-2 border-[#e5e5e5] w-[100%] my-[10px]' type="text" onChange={handleChange}/>
                        <textarea name="description" value={product.description} className='block border-2 border-[#e5e5e5] w-[100%]' type="text" onChange={handleChange}/>
                        <div className='flex justify-end py-5 '>
                          <button className='mr-6 px-4 py-1 border-2 border-[blue] text-[blue]'>Cancel</button>
                          <button className='bg-[blue] text-[white] px-4 py-1' onClick={updateInfo}>Save</button>
                        </div>
                    </div>
                </div>
                <div className='md:w-[35%] w-full'>
                    <RightSideBar data={data}/>
                </div>
            </div>
            <div className='bg-[white] w-[100%] border-2 border-[#e5e5e5] mt-3 p-3'>
                <h1>Video</h1>
                <input type="text" name='video' value={product.video} className='border-2 border-[#e5e5e5] w-[100%]' onChange={handleChange}/>
            </div>
            <div className='bg-[white] w-[100%] border-2 border-[#e5e5e5] my-3 p-3'>
                <h1>Other Details</h1>
                <div className="mx-auto mt-4" width="530" height="360" controls>
                    <h1>This is up to you</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edit
