import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {  getuserById, updateUserById } from '../helper/AxiosInstance'

const Update = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: ""
  })

    let {id} = useParams();
  
    const navigate = useNavigate();

    const handleInput = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    }

    const fetchData = async () => {
      let result = await getuserById.get(`/users/${id}`)
      //  console.log(result.data);
      setValues(result.data);
  }
  
    const updateData = async (e) => {
      e.preventDefault();
          let result = await updateUserById.put(`/users/${id}`,values)
          // setValues(result)
          console.log(result);
          navigate('/');
    }

    useEffect(()=>{
        fetchData();
    },[] )
  
    return (
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center text-align-center'>
        <div className='w-75 rounded bg-white shadow px-5 pt-5'>
          <h1>Update User</h1>
          <form onSubmit={updateData}>
            <div className="mb-3">
              <label htmlFor='email' class="form-label">Name :</label>
              <input
                type="name"
                className="form-control"
                name='name'
                value={values.name}
                onChange={handleInput}
                placeholder='enter your name'
              />
            </div>
            <div className="mb-3">
              <label htmlFor='email' className="form-label" >Email :</label>
              <input
                type="email"
                className="form-control"
                name='email'
                value={values.email}
                onChange={handleInput}
                placeholder='enter your emailId'
              />
            </div>
            <div className="mb-3">
              <label htmlFor='phone' className="form-label">Phone No :</label>
              <input
                type="phone"
                className="form-control"
                name='phone'
                value={values.phone}
                onChange={handleInput}
                placeholder='enter your phone no'
              />
            </div>
            <div className='d-flex justify-content-center'>
              <button className="btn btn-primary ">Update</button>
              <Link to="/" className='btn btn-success '>Back</Link>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Update