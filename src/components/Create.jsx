import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUser } from '../helper/AxiosInstance'

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const navigate = useNavigate();
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values);
  }

  const createData = async (e) => {
    e.preventDefault();
    try {
        let result = await createUser.post("/users", values)
        setValues(result.data)
        // console.log(result.data);
        navigate('/');
      }catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center text-align-center'>
      <div className='w-75 rounded bg-white shadow px-5 pt-5'>
        <h1>Create User</h1>
        <form onSubmit={createData}>
          <div className="mb-3">
            <label htmlFor='email' class="form-label">Name :</label>
            <input
              type="name"
              className="form-control"
              name='name'
              placeholder='enter your name'
              value={values.name}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='email' className="form-label" >Email :</label>
            <input
              type="email"
              className="form-control"
              name='email'
              placeholder='enter your emailId'
              value={values.email}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='phone' className="form-label">Phone No :</label>
            <input
              type="phone"
              className="form-control"
              name='phone'
              placeholder='enter your phone no'
              value={values.phone}
              onChange={handleInput}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <button className="btn btn-primary ">Submit</button>
            <Link to="/" className='btn btn-success '>Back</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create