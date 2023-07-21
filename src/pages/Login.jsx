import React from 'react'
import { useState } from 'react'
import data from '../data'
import { Navigate, useNavigate } from 'react-router-dom'


export const Login = ({setuser}) => {

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")


  const navi = useNavigate()

  console.log("uname :",username,"pass :",password)

  const getUsers=()=>{

    fetch("https://64ba2d335e0670a501d5c07e.mockapi.io/users")
    .then((res)=>res.json())
    .then((data)=>{

      islem(data)

    })
    .catch((err)=>console.log(err))
  }

  const islem=(gelendeger)=>{

    gelendeger.map((item)=>{

      username === item.username && password === item.password ? setuser(true) : setuser(false)

    })

    navi("/people")

  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    
    getUsers();
  }

  return (
    
    <div className='container m-auto text-center p-3'>

        <h1 className='text-center text-danger mb-4'>Login</h1>

        <form onSubmit={handleSubmit} className='w-50 m-auto text-center'>

            <div class="form-group mb-4">
                <label for="exampleInputEmail1">Username</label>
                <input type="text" class="form-control" i
                d="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Username"
                onChange={(event)=>setusername(event.target.value)}
                />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                onChange={(e)=>setpassword(e.target.value)}
                />
            </div>
            <div className='mt-4'>
            <button type="submit" class="btn btn-primary">Login</button>
            </div>
            
            </form>
            </div>
  )
}
