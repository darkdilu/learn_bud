import { useNavigate } from "react-router-dom";
import "./front.css";
import { useEffect } from "react";
import axios from "axios";

const Front = () => {
  const navigate = useNavigate();

  const phone = () => {
    navigate("/login");
  };
  const Signup = () => {
    navigate("/sign");
  };

  const callGoogle = () => {
    window.location.href = "http://localhost:8003/api/auth/google";
  };
  
  return (
    <div className="anoop1">
      <div className="page1">
        <img
          className="pageImg1"
          src="src/assets/Authentication/Group.svg"
          alt=""
        />

        <div className="pageBtn">
          {/* <div className="H123"></div> */}
          <h1 className="pageH1">
            Let's meeting new <br /> <span className="spa">_</span> people
            around you
          </h1>
          <div className="button1">
            <div className="f12">
              <i class="fa-solid fa-phone-volume"></i>
              <button className="frontbtn" onClick={phone}>
                {" "}
                Login with Phone
              </button>
            </div>
            <div className="f13">
              <img
                className="img13"
                src="src/assets/Authentication/google_13170545.png"
                alt=""
              />
              <button className="frontbtn1" onClick={callGoogle}>
                Login with Google
              </button>
            </div>

            <p className="p12">
              Don't have an account?{" "}
              <a href="" className="a1" onClick={Signup}>
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
// [FILE: front.js](file "front.js")
