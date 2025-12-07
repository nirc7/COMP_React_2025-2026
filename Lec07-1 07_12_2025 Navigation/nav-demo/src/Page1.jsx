import { UNSAFE_createClientRoutesWithHMRRevalidationOptOut, useNavigate } from 'react-router-dom';

export default function Page1() {
  const navigate = useNavigate();

  const btnNav2P2WD = () => {
    let userObj = {
      userId: 7,
      userName: 'avi'
    };

    navigate('/page2', { state: userObj });
  }

  return (
    <div>
      page1 <br />
      <button onClick={btnNav2P2WD}>go2page2WD</button>
    </div>
  )
}
