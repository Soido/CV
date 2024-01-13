import { Outlet, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import { useWindowSize } from "react-use";

function MainLayout() {
  const { width, height } = useWindowSize();
  const location = useLocation();

  return (
    <div>
      <Menu
        bgColor={location.pathname === "/" ? "bg-transparent" : "bg-white/80"}
        height={
          width > 425 && location.pathname === "/" ? "h-[90px]" : "h-[58px]"
        }
        margin={
          width > 425 && location.pathname === "/" ? "-mt-[8rem]" : "-mt-[6rem]"
        }
      />
      <Outlet />
    </div>
  );
}

export default MainLayout;
