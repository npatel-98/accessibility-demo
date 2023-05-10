import React from 'react'

function CardItem() {
  return (
    <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 max-w-lg rounded overflow-hidden shadow-lg' tabIndex='0'>
      <img src="https://appline-tailwind.preview.uideck.com/images/blog-01.jpg" alt='Sunset in the mountains' className='w-full rounded' />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
      <div className='px-6 pt-4 pb-2 '>
        <button type='button' className=' rounded-md bg-indigo-400 py-[10px] px-9 text-base font-medium text-white hover:bg-indigo-300 focus:border-blue-400'>Learn More</button>
      </div>
    </div>
  )
}

export default CardItem;