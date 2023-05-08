import React from 'react'
import CardItem from '../CardItem'

function CardComponent() {
  return (
    <>
    <div className='mt-[86px] py-[100px] bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 relative' id='main-content'>
    <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 items-center">
            <CardItem />
            <CardItem />
            <CardItem />
            {/* <CardItem /> */}
          </div>
        </div>
    </div>
    </>
)}

export default CardComponent