import React from 'react'
import CardItem from '../CardItem'

function CardComponent() {
  return (
    <div className='py-[100px] relative' id='main-content'>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5 items-center">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  )
}

export default CardComponent