import { useState } from "react";
import "./job.css";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const [selectedJob, setSelectedJob] = useState(""); // Store the selected job status
  const navigate = useNavigate()
  const handleCheckboxChange = (e) => {
    setSelectedJob(e.target.id); // Set the selected job status to the ID of the checkbox clicked
  };

  
  const navigateToPage=(selectedJob)=>{
    if(selectedJob === "1"||selectedJob === "2"){
      navigate('/job/employe')
    }else{
      navigate('/job/seeker')
    }
  }

  return (
    <div className="anoop12">
      <div className="job">
        <h3>Job Status</h3>

        <label className="main123">
          <span>
            <input
              type="checkbox"
              id="1"
              checked={selectedJob === "1"}
              onChange={handleCheckboxChange}
            />
            Employer
          </span>
        </label>
        <label className="main123">
          <span>
            <input
              type="checkbox"
              id="2"
              checked={selectedJob === "2"}
              onChange={handleCheckboxChange}
            />
            Employee
          </span>
        </label>
        <label className="main123">
          <span>
            <input
              type="checkbox"
              id="3"
              checked={selectedJob === "3"}
              onChange={handleCheckboxChange}
            />
            Job Seeker
          </span>
        </label>
        <button onClick={()=>navigateToPage(selectedJob)}>Next</button>
      </div>
    </div>
  );
};

export default Job;
