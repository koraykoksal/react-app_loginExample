import React from 'react'


export const Login = () => {




  return (
    
    <div className='container m-auto text-center p-3'>

        <h1 className='text-center text-danger mb-4'>Login</h1>

        <form className='w-50 m-auto text-center'>

            <div class="form-group mb-4">
                <label for="exampleInputEmail1">Username</label>
                <input type="text" class="form-control" i
                d="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Username"
                />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                />
            </div>
            <div className='mt-4'>
            <button type="submit" class="btn btn-primary">Login</button>
            </div>
            
            </form>
            </div>
  )
}
