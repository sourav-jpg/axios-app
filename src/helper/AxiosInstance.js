import axios from 'axios';

let getDetails = axios.create({
    baseURL :"http://localhost:4000/"
});

let createUser =  axios.create({
    baseURL:"http://localhost:4000/"
})

let getuserById =  axios.create({
    baseURL:"http://localhost:4000/"
})

let updateUserById =  axios.create({
    baseURL:"http://localhost:4000/"
})

let deleteUserById =  axios.create({
    baseURL:"http://localhost:4000/"
})

export {
    getDetails,
    createUser,
    getuserById,
    updateUserById,
    deleteUserById
}