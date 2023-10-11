// import { ReactComponent as Desktop } from "../../assets/images/bg-sidebar-desktop.svg";
// import { ReactComponent as Desktop } from "../../assets/images/bg-sidebar-desktop.svg";

import Desktop from "../../assets/images/bg-sidebar-desktop.svg";
import Mobile from "../../assets/images/bg-sidebar-mobile.svg";
import React from "react";
import useMediaQuery from "../../hooks/use-media-query";

const SideBarBg = () => {
  const isMobile = useMediaQuery({
    screen: "800px",
    type: "max"
  });

  return isMobile ? (
    <img className="bg-img" src={Mobile} alt="#" />
  ) : (
    <img className="bg-img" src={Desktop} alt="#" />
  );
  // return isMobile ? <Mobile /> : <Desktop />;
};

export default SideBarBg;
