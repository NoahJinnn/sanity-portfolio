import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function ContactMe() {
  return (
    <div className="absolute flex justify-center items-center" style={{ width: '100vw', height: '70vh' }}>
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
  )
}
