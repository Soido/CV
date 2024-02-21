import MenuSmall from "./MenuSmall";
import MenuXL from "./MenuXL";

import { useWindowSize } from "react-use";

function Menu() {
  const { width, height } = useWindowSize();

  return (
    <header
      className={`fixed lg:py-[10px] min-w-[320px]  px-0 w-screen left-0 top-0 z-10 m-0 `}
    >
      {width < 1024 ? <MenuSmall /> : <MenuXL />}
    </header>
  );
}

export default Menu;
