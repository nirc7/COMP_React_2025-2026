import { useLocation } from "react-router-dom";

export default function Page2() {
  const { state } = useLocation();
  let userObj = state;

  return (
    <div>
      page2 <br />
      user id = {userObj.userId} <br />
      user name = {userObj.userName}
    </div>
  )
}
