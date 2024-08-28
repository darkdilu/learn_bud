import React, { useEffect } from 'react'
import {useForm} from "react-hook-form"
import { useNetworkRequest } from '../../CustomHooks/useNetworkRequest';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../store';
import { useDispatch } from 'react-redux';

const LoginPage = ({closeLoginModal,openSignUpModal,styles}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { data:returnedData, error, loading, sendRequest } = useNetworkRequest();
    const {register,handleSubmit,setError,formState: { errors }} = useForm();

    function onSubmitHandler(data){
        sendRequest("/user/login","POST",data)
    }

    useEffect(()=>{
        if(returnedData){
            console.log(returnedData)
            dispatch(userActions.userLogin());
            navigate("/userhome")
        }
    },[returnedData])
  return (
    <div className={styles.modalOverlay} onClick={closeLoginModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <label>Email/Mobile</label>
              <input type="text" placeholder="Value" {...register("Email")}/>
              <label>Password</label>
              <input type="password" placeholder="Value" {...register("Password")}/>
              <button className={`${styles.btn} ${styles.register}`} disabled={loading}>{loading?"Loading...":"Log in"}</button>
            </form>
            <p className={styles.forgotPassword}>
              <a href="#forgot-password">Forgot password?</a>
            </p>
            <p className={styles.signupText}>
        Don't have an account? <a href="#signup" onClick={openSignUpModal}>Sign Up</a>
      </p>
          </div>
        </div>
  )
}

export default LoginPage