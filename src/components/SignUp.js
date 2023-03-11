import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import usr from '../asserts/User.png'
import eml from '../asserts/email.png'
import pw from '../asserts/password.png'

function SignUp() {
  return (
    <div className=''>
       
        <div className='log-in '>
<h1 className='text-green-500 text-4xl font-bold pl-28 pt-52 '>Welcome back !</h1>
<div className=" pt-8 font-bold pb-20">
<h4 className='pl-28 text-white pb-2'>to keep connected with us please</h4>
<h className="pl-32 text-white"> login with your personel info</h>
</div>
<div className=" ml-44 lio">
<button className='text-gray-300 px-12 py-2 '><Link to="/login">sign in</Link></button>
</div>
        </div>
      
        <div className='  ml-96 pb-64 pt-2 signup-form  '>
        <Navbar className=''/>

            <h1 className='text-green-500 text-3xl pt-28  pl-72 pb-14 ' >create Account</h1>
            <div className='the-form pl-60 '>
 <div className=" flex mb-2 poo formt">            
<img src={usr}  className='pr-4' alt="userpic" />
<input type="name" className='pl-2' placeholder='The user name'/>
</div>
<div className="flex mb-2  poo"> 
<img src={eml}  className='pr-4' alt="userEmailpic"/>
<input type="text"className="  pl-2 " name="mail" required placeholder="example@gmail.com"/>
</div>
<div className="flex mb-2   poo ">

<img src={pw}  className='pr-4' alt="userpic" />
<input type="" className='pl-2' placeholder='*********'/>
</div>

<div className="flex mb-4 poo ">

<img src={pw}  className='pr-6' alt="userpic" />
<input type="name" className='pl-2' placeholder='********* (CONFIRMATION)'/>
</div> 
<div className=" text-white  mt-16 ml-20 lioo  ">
<button className='px-14 py-2'><Link to="/profile">sign up</Link></button>
</div> 
            </div>
        </div>
    </div>
  )
}

export default SignUp