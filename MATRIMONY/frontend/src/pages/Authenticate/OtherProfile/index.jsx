import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { getId } from "../../../src/utils/index.js";
import "./other.css";

const Other = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [pro, setPro] = useState("");
  const [halo, sethalo] = useState(false);

  const Getprofile = async () => {
    const getresponse = await axios.get(
      `http://localhost:1450/user/profile/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(getresponse);
    setData(getresponse.data);
  };

  const GetMyPro = async () => {
    const tresponse = await axios.get(
      `http://localhost:1450/user/profile/${getId()}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(tresponse);
    setPro(tresponse.data.user._id);
  };

  useEffect(() => {
    Getprofile(), GetMyPro();
  }, []);
  const Chatbtn = () => {
    navigate(`/chat/${pro}`);
    // console.log("proooooooo", pro);
  };
  const Chat = (_id) => {
    navigate(`/chat/${_id}`);
  };
  const Hombtn = () => {
    navigate(`/landing/${getId()}`);
  };
  const proBtn = () => {
    navigate(`/mypro/${pro}`);
  };
  return (
    <div className="anoop19">
      <div className="side1-6">
        <h1>Matrimony</h1>
        <h3>
          <i class="fa-solid fa-house"></i> Home
        </h3>

        <h3>
          {" "}
          <i class="fa-brands fa-facebook-messenger"></i> Message
        </h3>
        <h3>
          {" "}
          <i class="fa-solid fa-star"></i> Favorites
        </h3>
        <h3>
          <i class="fa-solid fa-bell"></i> Notifications
        </h3>
        <h3>
          {" "}
          <i class="fa-solid fa-gear"></i> Settings
        </h3>

        <h3 className="pro1-6">
          <i class="fa-solid fa-user"></i> Profile
        </h3>
      </div>
      <div className="header4">
        <i class="fa-solid fa-angle-left"></i>
        <div className="image6">
          {/* <img className="img4" src="\profile2.jpeg" alt="" /> */}
          <img
            className="arrow"
            src="../../../src/assets/Authentication/Tag.svg"
            alt=""
          />
          <img
            className="scroll"
            src="../../../src/assets/Authentication/Scroll.svg"
            alt=""
          />
          <img
            className="img4"
            src="../../../src/assets/Authentication/profile5.jpeg"
            alt=""
          />
          <div className="botImg">
            <br />
            <div className="name12">
              <h2> {data.user && data.user.name} ,</h2>
              <h2> {data.reg && data.reg.age}</h2>
            </div>
            <h3>Location : {data.address}</h3>
            <img
              src="../../../src/assets/Authentication/Match Percentage.svg"
              alt=""
            />
          </div>
        </div>

        {/* <button className="btn4">Logout</button> */}
      </div>
      <div className="links">
        <div className="links2">
          <a id="ou" href="#sec1">
            About
          </a>

          <a id="ther" href="#sec2">
            contact info
          </a>
        </div>
      </div>

      <div className="context4">
        {/* <p className="p3"></p> */}
        {/* <h1>MyProfile</h1> */}
        {/* <div className="user">
          <h2>User details</h2>
          <br />
          <h3>Name : {data.user && data.user.name}</h3>
  <h3>Age : {data.reg && data.reg.age}</h3>
          <br />
        </div> */}

        <div className="swap">
          <section className="s1" id="sec1" href="#ou">
            <div className="about">
              <h2>About</h2>
              <h3 className="ab"> {data.about}</h3>
              <h3>username : {data.user && data.user.username}</h3>
            </div>
            <div className="habbits">
              <h2>Habbits</h2>
              <h3>Drinking : {data.reg && data.reg.drinking}</h3>
              <h3>Smoking : {data.reg && data.reg.smoking}</h3>
              <h3>Hobbies : {data.reg && data.reg.hobbies}</h3>
            </div>

            <div className="personaldet">
              <h2>Personal details</h2>
              <h3>Gender: {data.gender}</h3>

              <h3>DOB:{data.reg && data.reg.dob}</h3>
              {/* <h3>{data.reg && data.reg.propic}</h3> */}
              <h3>Qualification{data.reg && data.reg.qualification}</h3>
              <h3>Education:{data.education}</h3>
            </div>
            {/* <h3>Proflepic:{data.reg && data.reg.propic}</h3> */}

            <div className="jobss">
              <h2>Job Details</h2>
              <br />
              <h3>Company{data.job && data.job.company}</h3>
              <h3>Designation: {data.job && data.job.designation}</h3>
              <h3>Location{data.job && data.job.location}</h3>
            </div>
          </section>

          {/* /////////////////// */}
          <section className="s2" id="sec2">
            <div className="contact">
              <h2>Contact</h2>
              <h3>Address:{data.address}</h3>
              <h3>Contact{data.contact}</h3>
              <h3>Email:{data.email}</h3>
            </div>
            <div className="bodytype">
              <h2>Body type</h2>
              <h3>Body Type: {data.bodytype}</h3>
              <h3>Height :{data.height}</h3>
              <h3>Weight :{data.weight}</h3>
            </div>
            <div className="Family">
              <h2>Family</h2>
              <h3>Father job :{data.fatherjob}</h3>
              <h3>Mother Job :{data.motherjob}</h3>
              <h3>Siblings :{data.siblings}</h3>
            </div>
            <div className="pro-det">
              <h2>Profile Details</h2>

              <h3>Occupation :{data.occupation}</h3>
              <h3>Passion :{data.passion}</h3>
              <h3>Future Plan :{data.futureplan}</h3>
              <h3>Income{data.income}</h3>
            </div>
            <div className="Religion">
              <h2>Religion</h2>
              <h3>Religion :{data.religion}</h3>
              <h3>Marrital status :{data.marrital}</h3>
              <h3>Mother Tongue :{data.motherTongue}</h3>
            </div>
          </section>
        </div>
      </div>
      <div className="components">
        {/* <h1>halo</h1> */}
        <img
          onClick={Hombtn}
          className="img122"
          src="../../../src/assets/Authentication/Button.jpg"
          alt=""
        />
        <img
          className="img122"
          src="../../../src/assets/Authentication/Button1.jpg"
          alt=""
        />
        <img
          className="img122"
          src="../../../src/assets/Authentication/Button2.jpg"
          alt=""
        />
        <img
          onClick={() => Chat(data._id)}
          className="msg12"
          src="../../../src/assets/Authentication/Message.jpg"
          alt=""
        />
      </div>
      {/* <footer>
        <h4>Haaai</h4>
      </footer> */}
    </div>
  );
};

export default Other;
