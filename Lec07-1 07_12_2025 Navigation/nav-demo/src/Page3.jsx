import { useNavigate, useParams } from "react-router-dom";

export default function Page3(props) {
  const navigate =  useNavigate();
  const { userId } = useParams();
  
  return (
    <div>
      page3 <br />
      userID = {userId} <br />
      <button onClick={()=> navigate('/page1')} >page1</button>
    </div>
  )
}
