import React, { useEffect } from 'react'
import {useForm} from "react-hook-form"
import { useNetworkRequest } from '../../CustomHooks/useNetworkRequest';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../store';
import { useDispatch } from 'react-redux';



const SignupPage = ({setGenerateOtp,closeSignUpModal,openLoginModal,styles,generateOpt}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { data:returnedData, error, loading, sendRequest } = useNetworkRequest();
    const {register,handleSubmit,setError,formState: { errors }} = useForm()

    function onSubmitHandler(data){
        if(data["Confirm-password" ]!== data.Password){
            setError("root",{message:"Passwords are not matching!"})
            return
        }
        sendRequest("/user/signup","POST",data)
    }

    useEffect(()=>{
        if(returnedData){
            dispatch(userActions.userLogin())
            navigate("/personalDetail")
        }
    },[returnedData])

    return (
        <div className={styles.modalOverlay} onClick={closeSignUpModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <label>Name</label>
              <input type="text" placeholder="Value" {...register("Name",{
                required:"Name can not be empty"
              })}/>
              <label>Email</label>
              <input type="email" placeholder="Value" {...register("Email")}/>
              <label>Mobile</label>
              <input type="text" placeholder="Value" {...register("Mobile")}/>
              <label>Password</label>
              <input type="password" placeholder="Value" {...register("Password")}/>
              <label>Confirm Password</label>
              <input type="password" placeholder="Value" {...register("Confirm-password")}/>
              {!generateOpt&&<a href="#forgot-password" onClick={()=>setGenerateOtp(true)}>Genrerate OTP</a>}
              {generateOpt&&<><label>OTP</label>
              <input type="text" placeholder="Value" /></>}
              <button className={`${styles.btn} ${styles.social}`} type='button'>Social Login</button>
              <button className={`${styles.btn} ${styles.register}`} type='submit' disabled={loading}>{loading?"Loading...":"Register"}</button>
            </form>
            <p className={styles.signupText}>
                Already have an account? <a href="#signup" onClick={openLoginModal} >Sign in</a>
            </p>
          </div>
        </div>
      )
}

export default SignupPage