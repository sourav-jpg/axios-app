import React, { useEffect, useState } from 'react'
import { getuserById } from '../helper/AxiosInstance';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  let {id} = useParams();
    const fetchData = async () => {
        let result = await getuserById.get(`/users/${id}`)
        //  console.log(result.data);
        setData(result.data);
    }

   useEffect(()=>{
    fetchData()
   },[])

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center text-align-center'>
    <div className='w-40 rounded bg-white shadow p-5 px-5 pt-5'>
        <div className="mb-2 ">
          <strong>Name : {data.name}</strong>
        </div>
        <div className="mb-2">
        <strong>Email : {data.email}</strong>
        </div>
        <div className="mb-2">
        <strong>Phone No : {data.phone}</strong>
        </div>
        <div className='d-flex justify-content-center'>
          <Link to={`/update/${data.id}`} className='btn btn-info btn-lg'>Edit</Link>
          <Link to="/" className='btn btn-success btn-lg'>Back</Link>
        </div>
    </div>
  </div>
  )
}

export default Read