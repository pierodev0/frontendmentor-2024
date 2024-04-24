import React from 'react'

const Hero = () => {
  return (
    <section className='bg-very-light-red text-white rounded-bl-[80px]'>
    <div className='wrapper space-y-8 text-center pt-20 pb-32'>
      <div className='space-y-5'>
        <h1 className='text-3xl md:text-5xl'>A modern publishing platform</h1>
        <h2 className='text-xl font-light'>
          Grow your audience and build your online brand
        </h2>
      </div>
      <div className='flex gap-2 justify-center'>
        <button className='rounded-full bg-white px-6 py-2 font-bold text-very-light-red'>
          Start for Free
        </button>
        <button className='rounded-full bg-white px-6 py-2 font-bold text-very-light-red'>
          Learn More
        </button>
      </div>
    </div>
  </section>
  )
}

export default Hero