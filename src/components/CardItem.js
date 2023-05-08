import React from 'react'

function CardItem() {
  return (
    <div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 flex flex-col bg-white' tabIndex='0'>
        <img src=" https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg" alt='card component' width="200" height='160' className='w-full rounded' />
        <div className='my-4 font-semibold text-lg text-center'>
            <h3>Card Title</h3>
        </div>
        <div className='flex my-2 mx-auto'>
            <button type='button' className=' bg-green-400 py-2 px-3 hover:bg-green-300'>Learn More</button>
        </div>
    </div>
  )
}

export default CardItem