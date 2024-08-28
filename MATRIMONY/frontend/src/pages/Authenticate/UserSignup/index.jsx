import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./usersignup.css";
import { toast } from "react-toastify";
import IdContext from "../../../context/IdContext";

const SignUp = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const error = queryParams.get('error');

    if (error === 'account_does_not_exist') {
      toast.error("You don't have an account Please Register")
    }
  }, [location]);


  const [show, setOt] = useState("");
  const [showReg, setReg] = useState([]);
  const navigate = useNavigate();
  const {setUserId} = useContext(IdContext)
  const [gamilOTPVerified,setGmailOTPVerified] = useState(false)
  const [phoneNumberOTPVerified,setPhoneNumberOTPVerified] = useState(false)

  // const [res, setRes] = useState();
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    emailCode: "",
    password: "",
    confirmPassword: "",
    phno: "",
    phoneOTP: "",
  });

  const dataChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  // const OnReg = async () => {
  //   setReg("");
  //   setOt("");
  //   if (cred.name == "") {
  //     return setReg("Please enter your name");
  //   } else if (cred.username == "") {
  //     return setOt("please enter username");
  //   } else {
  //     const response = await axios.post(
  //       `http://localhost:1450/user/signup`,
  //       cred
  //     );
  //     console.log(response.data);

  //     console.log(response.data.detail._id);
  //     navigate(`/registration/${response.data.detail._id}`);
  //   }
  // };

  const generateGmailOtp = async () => {
    console.log(signupData.email);
    const email = signupData.email
    try {
      const response = await axios.post('http://localhost:8003/api/auth/generate-otp', { email })
      console.log(response);
      if(response.data.message === "OTP sent successfully"){
        toast.success('OTP sent successfully to your email');
      }else{
        toast.error('Failed to send OTP');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const verifyGmailOtp = async () => {
    const email = signupData.email;
    const otp = signupData.emailCode;
    try {
      const response = await axios.post('http://localhost:8003/api/auth/verify-gmail-otp', { email, otp })
      console.log(response);
      if (response.data.message === 'OTP verified successfully') {
        setGmailOTPVerified(true)
        toast.success('OTP verified successfully ');
      }else{
        toast.error('Invalid OTP ')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const sendOtp = async() => {
    const phoneNumber = `+91${signupData.phno}`;

    try {
      const response = await axios.post('http://localhost:8003/api/auth/send-otp', { phoneNumber });
      console.log(response.data);
      if (response.data.message === 'OTP send successfully') {
        toast.success('OTP sent successfully');
      } else {
        toast.error('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      toast.error('Please give the phone number');
      console.error('OTP sending error:', error);
    }
  };

  const verifyOtp = async () => {
    console.log(signupData.phno);
    
    const phoneNumber = `+91${signupData.phno}`;
    const otp = signupData.phoneOTP 
    try {
      const response = await axios.post('http://localhost:8003/api/auth/verify-otp', { phoneNumber, otp });
      console.log(response);
      if (response.data.message === 'Verification successful') {
        setPhoneNumberOTPVerified(true)
        toast.success('OTP verified successfully');
      } else {
        toast.error('Invalid OTP. Please try again.');
      }
    } catch (error) {
      toast.error('Invalid OTP. Please try again2.');
      console.error('OTP verification error:', error);
    }
  };

  const registration = async () => {
    try {
      const { emailCode, phoneOTP, ...otherDetails } = signupData;
      console.log(otherDetails);
  
      // Send data to the backend for registration
      const response = await axios.post('http://localhost:8003/api/auth/register', otherDetails,{withCredentials:true});
      const userId = response.data.user._id
      console.log(response.data);
  
      if (response.data.message === 'User already exists') {
        toast.error('Email is taken');
      } else if (response.data.message === 'Passwords do not match') {
        toast.error('Passwords do not match');
      } else if (response.status === 201) {
        toast.success('User registered successfully');
        setUserId(userId)
        navigate(`/registration/${userId}`); // Redirect to login or another page
      }
    } catch (error) {
      // Handle AxiosError specifically
      if (error.response) {

        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Response error data:', error.response.data);
        console.log('Response error status:', error.response.status);
        console.log('Response error headers:', error.response.headers);
  
        // Extract the message from the error response and display it
        toast.error(error.response.data.message || 'Registration failed. Please try again.');
      } else if (error.request) {
        // The request was made but no response was received
        console.log('Request error data:', error.request);
        toast.error('No response from server. Please try again.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error message:', error.message);
        toast.error('An unexpected error occurred. Please try again.');
      }
    }
  };
  


  return (
    <div className="anoop3">
      <div className="data">
        <h3>Sign up</h3>
        <div className="insert">

          <label htmlFor="">
            First Name <input type="text" name="firstName" onChange={dataChange} />
            <span style={{ color: "red" }}>{showReg}</span>
          </label>

          <label htmlFor="">
            Last Name <input type="text" name="lastName" onChange={dataChange} />
            <span style={{ color: "red" }}>{showReg}</span>
          </label>

          <label htmlFor="">
            Username{" "}
            <input type="text" name="username" onChange={dataChange} />
            <span style={{ color: "red" }}>{show}</span>
          </label>

          <div className="footer22">
            <label htmlFor="">
              email{" "}
              <input type="email" name="email" onChange={dataChange}/>
              <span style={{ color: "red" }}>{show}</span>
            </label>

            <div className="Otp">

              <button onClick={generateGmailOtp} className="link-button">
                Generate OTP <i className="fa-solid fa-arrows-rotate" style={{ color: 'rgb(152, 18, 188)' }}></i>
              </button>
              <i className="fa-regular fa-circle-check" style={{ color: 'rgb(152, 18, 188)' }}></i>
            </div>
          </div>

          <div className="footer22">
            <label htmlFor="">
              email verify code{" "}
              <input type="text" name="emailCode" onChange={dataChange} />
              <span style={{ color: "red" }}>{show}</span>
            </label>

            <div className="Otp">

              <button className="link-button" onClick={verifyGmailOtp}>
                Verify OTP
              </button>
              <i className="fa-regular fa-circle-check" style={{ color: 'rgb(152, 18, 188)' }}></i>
            </div>

          </div>


          <label htmlFor="">
            Password{" "}
            <input type="password" name="password" onChange={dataChange} />
          </label>

          <label htmlFor="">
            ConfirmPassword{" "}
            <input
              type="password"
              name="confirmPassword"
              onChange={dataChange}
            />
          </label>

          <label htmlFor="">
            Mobile <input lang="en-US" type="number" name="phno" onChange={dataChange} />
          </label>

          <div className="footer22">
           <div className="Otp">
              <button onClick={sendOtp} className="link-button">
                send OTP
                <i className="fa-solid fa-arrows-rotate" style={{ color: 'rgb(152, 18, 188)' }}></i>
              </button>
              <i className="fa-regular fa-circle-check" style={{ color: 'rgb(152, 18, 188)' }}></i>
           </div>

            <label htmlFor="">
              OTP <input type="number" name="phoneOTP" onChange={dataChange} />{" "}
            </label>
            <div className="Otp">
              <button onClick={verifyOtp} className="link-button">
                verify OTP
              </button>
              <i className="fa-regular fa-circle-check" style={{ color: 'rgb(152, 18, 188)' }}></i>
           </div>


            <button className="up" onClick={registration}>
              Register
            </button>
            <button className="up2">Social media login</button>
            <p className="p4">
              Allready have an account?
              <a className="a3" href="/login">
                Log In
              </a>{" "}
            </p>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
