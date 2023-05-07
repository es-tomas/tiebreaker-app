import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Hello world</p>
      <Outlet />
    </div>
  );
};

export default Home;
