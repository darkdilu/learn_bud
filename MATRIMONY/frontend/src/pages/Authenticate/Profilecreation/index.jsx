import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./profile.css";
import useAxiosPrivate from "../../../CustomApi/UseAxiosPrivate";

const Profile = () => {

  const { id } = useParams();
  console.log(id);
  
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const [reRegistrationData, setreRegistrationData] = useState({
    state: "",
    district: "",
    city: "",
    profession: "",
    qualification: "",
    religion: "",
    motherTongue: "",
    aboutMe: "",
    height: "",
    weight: "",
    bodyType: "",
    martialStatus: "",
    familyType: "",
    diabilities: "",
    caste: "",
    patnerExpectation: "",
    fatherName: "",
    numberOfMarriedSibilings: "",
    numberOfSibilings: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    address: "",
  });
  const dataChange = (e) => {
    setreRegistrationData({
      ...reRegistrationData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(reRegistrationData);


  const profileReRegistraion = async()=>{
    try {
      const response = await axiosPrivate.patch(`http://localhost:8003/api/matrimony/profile/reRegistration/${id}`,reRegistrationData)
      console.log(response.data);
      if(response.status === 200){
        toast.success("Profile updated successfully");
        navigate('/job')
      }else{
        toast.error("Failed to create profile");
      }
    } catch (error) {
      toast.error("An error occurred while creating the profile");
      console.error(error);
    }
  }

  return (
    <div className="anoop15">
      {/* <h1 className="head">Matrimony</h1> */}

      <div className="box12">
        <h3>Additional details</h3>
        <div className="box77">
          <div className="card55">
            <textarea
              placeholder="About"
              type="text"
              name="aboutMe"
              onChange={dataChange}
            ></textarea>
            <br />{" "}
            <select name="martialStatus" onChange={dataChange}>
              <option value="">Marital Status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </select>
            <br />

            {/* <label htmlFor="">Horriscope</label> */}
            <input
              placeholder="Family Type"
              type="text"
              name="familyType"
              onChange={dataChange}
            />{" "}
            <br />
            {/* <label htmlFor="">Marrital status</label> */}
            <input
              placeholder="Father's Name"
              type="text"
              name="fatherName"
              onChange={dataChange}
            />
            <br />
            {/* <label htmlFor="">About</label> */}
            <input
              placeholder="Father's Occupation"
              type="text"
              name="fatherOccupation"
              onChange={dataChange}
            ></input>
            <br />
            {/* <label htmlFor="">Height</label> */}
            <input
              placeholder="Mother's Name"
              type="text"
              name="motherName"
              onChange={dataChange}
            />
            <br />
            {/* <label htmlFor="">Weight</label> */}
            <input
              placeholder="Mother's Occupation"
              type="text"
              name="motherOccupation"
              onChange={dataChange}
            />
            <br />
            {/* <label htmlFor="">Body type</label> */}
            <input
              placeholder="Number of Siblings"
              type="number"
              name="numberOfSibilings"
              onChange={dataChange}
            />
            <br />
            <input
              placeholder="Address"
              type="text"
              name="address"
              onChange={dataChange}
            />{" "}
            <br />
            <input
              placeholder="Mother Tongue"
              type="text"
              name="motherTongue"
              onChange={dataChange}
            />
            {/* <label htmlFor="">Education</label> */}
          </div>
          <br />
          <div className="card66">
            <input
              placeholder="Number of Siblings Married"
              type="number"
              name="numberOfMarriedSibilings"
              onChange={dataChange}
            />{" "}
            <br />

            {/* <label htmlFor="">Annual income</label> */}
            <input
              placeholder="Height"
              type="number"
              name="height"
              onChange={dataChange}
            />
            <br />
            {/* <label htmlFor="">Passion</label> */}
            <input
              placeholder="Weight"
              type="number"
              name="weight"
              onChange={dataChange}
            />
            <br />

            <input
              placeholder="State"
              type="text"
              name="state"
              onChange={dataChange}
            />
            <br />
            <input
              placeholder="District"
              type="text"
              name="district"
              onChange={dataChange}
            />
            <br />
            <input
              placeholder="City"
              type="text"
              name="city"
              onChange={dataChange}
            />
            <br />
            <input
              placeholder="profession"
              type="text"
              name="profession"
              onChange={dataChange}
            />
            <br />
            <input
              placeholder="qualification"
              type="text"
              name="qualification"
              onChange={dataChange}
            />
            <br />
            {/* <label htmlFor="">Future plans</label> */}
            <input
              placeholder="Body Type"
              type="text"
              name="bodyType"
              onChange={dataChange}
            />
            <br />


            {/* <label htmlFor="">Father Occupation</label> */}
            <input
              placeholder="Disabilities"
              type="text"
              name="diabilities"
              onChange={dataChange}
            />
            <br />
            {/* <label htmlFor="">Mother Name</label> */}
            <input
              placeholder="Religion"
              type="text"
              name="religion"
              onChange={dataChange}
            />
            <br />
            {/* <label  htmlFor="">Mother Occupation</label> */}
            <input
              placeholder="Cast/Community"
              type="text"
              name="caste"
              onChange={dataChange}
            />
            <br />
            {/* <label htmlFor="">Siblings</label> */}
            <input
              placeholder="Expectaions from Partner"
              type="text"
              name="patnerExpectation"
              onChange={dataChange}
            />{" "}
            <br />
          </div>
        </div>
        <button className="sub" onClick={profileReRegistraion} >
          Next
        </button>
      </div>



      <footer></footer>
    </div>
  );
};

export default Profile;

{
  /* <h1>lifestyle--eating habit,drinking,smoking,intresting habbit</h1>
          <h1>career information--education,occupation,salary</h1>
          <h1>
            personal details--name,gender,dob,religion,language,state, family
            type,
          </h1>
          <h1>basic information--height,weight,bodytype,</h1>
          <h1>maritalstatus</h1>
          <h1>partner preference</h1> */
}
