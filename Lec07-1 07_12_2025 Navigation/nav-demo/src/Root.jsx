import { Link, Outlet } from "react-router-dom";

export default function Root() {
  let num=7;

  return (
    <div>
      <Link to={"page1"}>page1 | </Link>
      <Link to={"page2"}>page2 | </Link>
      <Link to={"page3/" + num}>page3 | </Link> <br />

      start outlet <br />
      <Outlet />
      end outlet
    </div>
  )
}
