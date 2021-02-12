import React from "react";
import { SocialIcon } from "react-social-icons";

export default function ContactMe() {
  return (
    <div className="absolute" style={{ top: "40%", right: "40%" }}>
      <SocialIcon
        url="https://www.linkedin.com/in/tcdnguyen/"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://github.com/trancongduynguyen1997"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{ height: 35, width: 35 }}
      />
      <SocialIcon
        url="https://www.facebook.com/TranCongDuyNguyen/"
        className="mr-4"
        target="_blank"
        fgColor="#fff"
        style={{ height: 35, width: 35 }}
      />
    </div>
  );
}
