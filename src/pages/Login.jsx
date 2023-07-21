import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const Login = ({setuser}) => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    let navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
        console.log(pass)
        
        setuser({email,pass})
        //kulanıcı login bilgilerini girdikten sonra navigate ile home sayfasına yönelendirli
        //logout işlemi için setuser içini boşaltarak logout işlmei yapılır
        navigate("/")
    }
  return (
    
    <div className='container m-auto text-center p-3'>

        <h1 className='text-center text-danger mb-4'>Login</h1>

        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" i
                d="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                onChange={(e)=>setPass(e.target.value)} />
            </div>
            <div className='mt-4'>
            <button type="submit" class="btn btn-primary">Login</button>
            </div>
            
            </form>
            </div>
  )
}
