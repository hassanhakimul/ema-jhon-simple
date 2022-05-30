import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import './SignUp.css'
const SignUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPass,setConfirmPass]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();

    const [createUserWithEmailAndPassword,hookError,user]= useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur=event=>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur=event=>{
        setPassword(event.target.value);
    }
    const handleConfirmPassBlur=event=>{
        setConfirmPass(event.target.value);
    }
    if(user){
        navigate('/')
    }

  const handleCreateUser =  event=>{
      event.preventDefault();
      if(password !== confirmPass){
          setError('Your two pass did not pass')
      }
      if(password.length<6){
          setError('password must be 6 characters or long')
          return;
        }

      createUserWithEmailAndPassword(email,password);
  }

    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'> SignUp </h2>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor='email'>Email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' id='' required/>
                </div>
                <div className="input-group">
                    <label htmlFor='password'>Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name='password' id='' required />
                    <p style={{color:'red'}}> {error}</p>
                    <p style={{color:'red'}}> {hookError}</p>
                </div>
                <div className="input-group">
                    <label htmlFor='password'>Confirm Password</label>
                    <input onBlur={handleConfirmPassBlur} type="password" name='confirm password' id='' required/>
                </div>
                <input className='form-submit' type="submit" value='Sign Up' />
            </form>
            <p>
            Already have an account ? <Link className='form-link' to='/login'>Login</Link>
            </p>
        </div>
    </div>
    );
};

export default SignUp;