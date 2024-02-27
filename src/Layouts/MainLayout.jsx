import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import { useWindowSize } from "react-use";
function MainLayout() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
}

export default MainLayout;
