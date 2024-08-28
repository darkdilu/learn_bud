import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./seek.css";
import useAxiosPrivate from "../../../../CustomApi/UseAxiosPrivate";
import IdContext from "../../../../context/IdContext";

const JobSeeker = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ title: "", expertiseLevel: "" });
  const axiosPrivate = useAxiosPrivate();
  const { userId } = useContext(IdContext);

  const dataChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const dataSumbit = async () => {
    if (!data.title || !data.expertiseLevel) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axiosPrivate.post(
        `/api/jobSeeker/createJobSeeker/${userId}`,
        data
      );
      if (response.status === 201) {
        toast.success("Successfully registered");
        navigate("/intrest");
      } else {
        toast.error("Error during registration");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="anoop14">
      <div className="seek">
        <h3>Job Details</h3>
        <div className="seek-input">
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={dataChange}
          />
          <label htmlFor="" className="sel">
            Expertise level
            <select name="expertiseLevel" onChange={dataChange}>
              <option value="" id="0">
                select
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </label>
          <button onClick={dataSumbit}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default JobSeeker;
