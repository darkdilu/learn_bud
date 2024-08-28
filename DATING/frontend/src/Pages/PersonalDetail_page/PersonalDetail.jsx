import React, { useEffect } from "react";
import PersonalStyles from "./PersonalDetails.module.css"
import LandingPage from "../LandingPage/LandingPage";
import {useForm} from "react-hook-form"
import { useNetworkRequest } from '../../CustomHooks/useNetworkRequest';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../store';
import { useDispatch } from 'react-redux';

const PersonalDetail=()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { data:returnedData, error, loading, sendRequest } = useNetworkRequest();
    const {register,handleSubmit,setError,formState: { errors }} = useForm()

    async function onSubmitHandler(data){
      const files = [];
      const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error("Error reading file"));
            reader.readAsDataURL(file);
        });
    };
      for (const [key,item] of Object.entries(data)){
        if((["ProfilePic","Image1","Image2","Image3","ShortReel"].includes(key))&&(item.length>0)){
          const dataUrl = await readFileAsDataURL(item[0])
          files.push({Name:key,URL:dataUrl})
          delete data[key]
        }
      }
      data.Files = files
      for(const key in data){
        if(["ProfilePic","Image1","Image2","Image3","ShortReel"].includes(key)){
          delete data[key]
        }
      }
      // console.log(data)
      sendRequest("/user/detailsregister","POST",data,true)
    }

    useEffect(()=>{
      if(returnedData){
        console.log(returnedData)
          navigate("/employement")
      }
    },[returnedData])

    return <>
    <LandingPage />
        <div className={PersonalStyles.modalOverlay} >
      <div className={PersonalStyles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={PersonalStyles.personalDetailsForm}>
          <h2>Personal Details</h2>
          <form action="" onSubmit={handleSubmit(onSubmitHandler)}>
          <input type="text" placeholder="Age" {...register("Age")}/>
          <span>DOB:</span>
          <input type="date" placeholder="DOB" {...register("DOB")}/>
          <input type="text" placeholder="Hobbies" {...register("Hobbies")}/>
          <input type="text" placeholder="Interests" {...register("Interests")}/>
          <input type="text" placeholder="Smoking Habits" {...register("SmokingHabits")}/>
          <input type="text" placeholder="Drinking Habits" {...register("DrinkingHabits")}/>
          <input type="text" placeholder="Qualifications" {...register("Qualifications")}/>
          <input type="text" placeholder="Gender" {...register("Gender")}/>
          
          <div className={PersonalStyles.profilePicContainer}>
            <label htmlFor="profile-pic" className={PersonalStyles.circle}>
              <input type="file" id="profile-pic" accept="image/*" {...register("ProfilePic")}/>
              <span className={PersonalStyles.icon}>🖼️</span>
            </label>
          </div>
          
          <div className={PersonalStyles.additionalImagesContainer}>
            <label htmlFor="image1" className={PersonalStyles.circle}>
              <input type="file" id="image1" accept="image/*" {...register("Image1",{
                required:"Required!"
              })}/>
              <span className={PersonalStyles.icon}>🖼️</span>
            </label>
            <label htmlFor="image2" className={PersonalStyles.circle}>
              <input type="file" id="image2" accept="image/*" {...register("Image2")}/>
              <span className={PersonalStyles.icon}>🖼️</span>
            </label>
            <label htmlFor="image3" className={PersonalStyles.circle}>
              <input type="file" id="image3" accept="image/*" {...register("Image3")}/>
              <span className={PersonalStyles.icon}>🖼️</span>
            </label>
          </div>
          
          <div className={PersonalStyles.shortReelContainer}>
            <label htmlFor="short-reel" className={PersonalStyles.square}>
              <input type="file" id="short-reel" accept="video/*" {...register("ShortReel")}/>
              <span className={PersonalStyles.icon}>🎥</span>
            </label>
          </div>
          
          <button type="submit" disabled={loading}>{loading?"Loading":"Next"}</button>
          </form>
        </div>
      </div>
    </div>
      
    
    </>
}
export default PersonalDetail;