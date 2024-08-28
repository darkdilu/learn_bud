import { useContext } from "react";
import { axiosPrivate } from "../../../../CustomApi/Axios";
import "../intrest.css";
import { useNavigate, useParams } from "react-router-dom";
import IdContext from "../../../../context/IdContext";

const Confirm = () => {
  const navigate = useNavigate();

  const {setMatrimonyProfileId,setUserId} = useContext(IdContext)

  const handleLogout = async () => {
    try {
     const response = await axiosPrivate.post('/api/auth/logout');
     console.log(response.data);
     if(response.status===200){
      localStorage.removeItem('MatrimonyProfileId');
      localStorage.removeItem('userId');

      setMatrimonyProfileId(null);
      setUserId(null);
      navigate('/login');
     }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="anoop11">
      <div className="intrest2">
        <h3>Intrested</h3>
        <button className="short" onClick={handleLogout}>
          Matrimony
        </button>
        <button>Dating</button>
      </div>
    </div>
  );
};
export default Confirm;
