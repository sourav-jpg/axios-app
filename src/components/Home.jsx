import React, { useEffect, useState } from 'react'
import "../App.css";
import { deleteUserById, getDetails, updateUserById } from '../helper/AxiosInstance';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const fetchData = async () => {
        let result = await getDetails.get("/users")
        //  console.log(result.data);
        setData(result.data);
    }

    const handleDelete = async (id) =>{
        const confirm  =  window.confirm("Would you like to delete");
        if(confirm){
            await deleteUserById.delete(`/users/${id}`);
            // location.reload();
        }
    }

    useEffect(() => {
        fetchData()
    },[data])

    return (
        <div className='table-div'>
            <h1>List of Users</h1>
            <div className='w-75 rounded bg-white'>
                <div className='d-flex justify-content-end mb-2 '>
                    <Link to='/create' class="btn btn-success btn-lg">Add</Link>
                </div>
                <table class="table table-striped border shadow p-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, i) => (
                            <tr key={i}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.phone}</td>
                                <td>
                                    <div class="button-div">
                                        <Link to={`/read/${val.id}`} type="button" class="btn btn-secondary">Read</Link>
                                        <Link to={`/update/${val.id}`} type="button" class="btn btn-info">Update</Link>
                                        <button onClick={(e)=>handleDelete(val.id)} type="button" class="btn btn-danger">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home