import React, { useState } from "react";
import Navbar from './Navbar'
import pw from '../asserts/password.png'
import el from '../asserts/email.png'
import { Link } from "react-router-dom";
import img from '../asserts/Group 7.png';

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
/*HERE IS JUST AN EXAMPLE FOR THE RESPONSE DATA FETCHED FROM THE DATA BASE LATER WITH SALEH AND TOUFIK*/
  const database = [
    {
      email: "user1",
      password: "pass1"
    },
    {
      email: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    mail: "invalid email",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { mail, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === mail.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // email not found
      setErrorMessages({ name: "mail", message: errors.mail });
    }
  };


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const renderForm = (
    <div className="form ">
      <form onSubmit={handleSubmit}>
        <div className="pl-20">
          <div className="pb-4 ">
        <div className=" flex  pl-4 input-container   ">
        <img className='pr-4 w-1/11' src={el} alt='email icon' />
          <input type="text"   className=" "   name="mail" required placeholder="example@gmail.com"/>
          {renderErrorMessage("mail")}
        </div>
        </div>

        <div className=" pl-4 flex   input-container  ">
        <img className=' pr-6' src={pw} alt='password icon' />
          <input type="password" name="pass" required placeholder="*********"/>
          {renderErrorMessage("pass")}
        </div>
        </div>
        <div className="pt-20">
        <div className="button-container ">
     <button type="submit" className="text-white px-14 py-2 ml-44 lioo  "><Link to='/profile'>Log in</Link></button>
      </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className=''>
      <div className="login-form ">
      <Navbar className=''/>
      <div className="posti pl-44">
        <h1 className="text-green-500 pl-52 pb-14 text-3xl pt-32 font-bold">Log in</h1>
        <div  className="profl ">
        {isSubmitted ? <div>THE PROFILE PAGE</div> : renderForm}
      </div>
      </div>
      </div>
      <div className="sign-in ">
        <div className=" pt-40 ">
       <h1 className="text-green-500 pl-24 text-3xl pb-16">Hello, friend !</h1> 
        <h4 className=" text-white pl-12 pb-4 text-xl">to keep connected with us please </h4>
        <h5 className="text-white pl-20 text-xl pb-16"> login with your personel info</h5>
        <div className="btt ml-36">
        <button className='text-gray-300  px-10 py-1 '><Link to="/signUp">sign up</Link></button>

        </div>
        <div className="pl-24 ">
        <div className=' w-64 pt-20 imageee '><img  src={img} alt='Wrong Path'></img></div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;