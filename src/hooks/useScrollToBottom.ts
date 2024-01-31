import { useEffect, useState } from "react";

export default function useScrollBottom() {
  const [isScrollBottom, setScrollBotom] = useState(false);

  const on = () => setScrollBotom(true);
  const off = () => setScrollBotom(false);

  useEffect(() => {
    let startTouchX = 0;
    let endTouchX = 0;
    let startTouchY = 0;
    let endTouchY = 0;

    document.addEventListener("touchstart", (event: any) => {
      startTouchX = event.changedTouch[0].pageX;
      startTouchY = event.changedTouch[0].pageY;
      console.log(startTouchX);
    });

    document.addEventListener("touchend", (event: any) => {
      endTouchX = event.changedTouch[0].pageX;
      endTouchY = event.changedTouch[0].pageY;
      if (
        startTouchY < 100 &&
        Math.abs(endTouchX - startTouchX) < 40 &&
        endTouchY > startTouchY
      )
        setScrollBotom(true);
      if (
        startTouchY < 500 &&
        Math.abs(endTouchX - startTouchX) < 40 &&
        endTouchY < startTouchY
      )
        setScrollBotom(false);
    });

    /* return function () {
      node.removeEventListener("mouseenter", on);
      node.removeEventListener("mousemove", on);
      node.removeEventListener("mouseleave", off);
    };*/
  }, []);

  return isScrollBottom;
}
