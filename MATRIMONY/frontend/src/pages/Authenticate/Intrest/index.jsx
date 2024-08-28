import { useState } from "react";
import "./intrest.css";
import { useNavigate, useParams } from "react-router-dom";

const Intrest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState(""); // State to track selected option

  const handleSelection = (e) => {
    setSelectedGoal(e.target.value); // Update selected goal based on user selection
  };

  const Long = () => {
    navigate(`/confirm`);
  };

  return (
    <div className="anoop10">
      <div className="look">
        <h3>Relationship Goals</h3>
        <div className="check12">
          <span>
            <input
              type="checkbox"
              name="relationshipGoal"
              value="shortTerm"
              checked={selectedGoal === "shortTerm"}
              onChange={handleSelection}
            />
            Short Term Relationship
          </span>
          <span>
            <input
              type="checkbox"
              name="relationshipGoal"
              value="longTerm"
              checked={selectedGoal === "longTerm"}
              onChange={handleSelection}
            />
            Long Term Relationship
          </span>
        </div>
        <button onClick={Long}>Next</button>
      </div>
    </div>
  );
};

export default Intrest;
