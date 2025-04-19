import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col text-foreground overflow-hidden'>
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12  gap-8 items-center relative">
            {/* CORNER DECORATION */}
            <div className="absolute -top-10 left-0 size-40 border-l-5 border-primary/10 dark:border-primary/30"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero