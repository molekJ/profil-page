import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { ButtonToTop } from "./ScrollStylde";
import { CgArrowLongUp } from "react-icons/cg";

export const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  });

  return (
    <ButtonToTop isVisible={isVisible} onClick={scrollToTop}>
      <CgArrowLongUp size={25} />
      <p>Go to the top</p>
    </ButtonToTop>
  );
};
