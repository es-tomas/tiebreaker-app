import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <p>Hello world</p>
      <Outlet />
    </div>
  );
};

export default Home;
