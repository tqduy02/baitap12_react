import { useState } from 'react'
import bird from '../svg/bird.svg'
import cat from '../svg/cat.svg'
import cow from '../svg/cow.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import heart from '../svg/heart.svg'
import horse from '../svg/horse.svg'

const svgMap = { bird, cat, cow, dog, gator, horse }

function AnimalShow({ type }) {
  const [heartSize, setHeartSize] = useState(30)

  const handleClick = () => {
    setHeartSize(heartSize + 10)
  }

  return (
    <div
      className="relative border border-gray-300 rounded-lg p-4 bg-white shadow-md cursor-pointer transition-all hover:shadow-lg"
      onClick={handleClick}
    >
      <img
        src={svgMap[type]}
        alt={type}
        className="w-24 h-24 mx-auto"
      />
      <img
        src={heart}
        alt="heart"
        className="absolute bottom-2 right-2"
        style={{ width: `${heartSize}px`, height: `${heartSize}px` }}
      />
    </div>
  )
}

export default AnimalShow