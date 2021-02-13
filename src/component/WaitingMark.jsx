import React from 'react'
import coffeeDrawImg from '../asset/coffee-draw.png'

export default function WaitingMark() {
  return (
    <div className="absolute flex flex-col justify-center items-center" style={{ top: '40%', width: '100vw' }}>
      <img style={{ margin: 0 }} src={coffeeDrawImg} alt="A draw of coffee smug" />
      <span>Drink something..?</span>
    </div>
  )
}
