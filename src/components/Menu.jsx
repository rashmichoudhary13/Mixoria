import React, { useRef, useState } from 'react'
import { sliderLeftLeaf, sliderRightLeaf, nextArrow, prevArrow, drink } from '../assets/constants/pic'
import { allCocktails } from '../assets/constants/data'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo('.Mtitle',{opacity: 0}, {opacity: 1, duration: 1, })
    gsap.fromTo('.details',{yPercent:100, opacity: 0 }, {yPercent: 0, opacity: 1, duration: 0.5})
    gsap.from('.cocktail-img', {x:-300, opacity: 0, duration: 1})
  },[currentIndex])

  const totalCocktails = allCocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  }

  const getCocktailAt = (indexOffset) => {
    return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
  }

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section className='relative max-h-dvh my-20 mb-90 lg:mb-30'>
       <img src={sliderLeftLeaf} alt="" className='absolute w-30 md:w-fit -bottom-90 lg:-bottom-20 object-contain'/>
       <img src={sliderRightLeaf} alt="" className='absolute right-0 -top-40 :-top-50 w-30 md:w-fit'/>

       <nav className='grid grid-cols-2 lg:grid-cols-4 mx-6 max-w-2xl lg:max-w-6xl md:mx-auto gap-10 md:gap-20 relative z-10 mt-30'>
        {
            allCocktails.map((cocktail,index) => {
                const isActive = index === currentIndex;

                return (
                    <button key={index}
                      className={`border-b cursor-pointer pb-2 transition-colors
                        ${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
                      onClick={() => goToSlide(index)}
                    >
                      {cocktail.name}
                    </button>
                )
            })
        }
       </nav>

       <div className='radial-gradient flex justify-between relative mx-6 md:mx-20'>
         {/* arrow */}
         <div className='absolute flex justify-between items-center container max-w-7xl mt-20'>
            <button className='hover:text-yellow-100 cursor-pointer transition-colors max-w-20 text-2xl'
                    onClick={() => goToSlide(currentIndex - 1)}>
                <span className='hidden lg:block'>{prevCocktail.name}</span>
                <img src={prevArrow} alt="" />
            </button>

            <button className='hover:text-yellow-100 cursor-pointer transition-colors max-w-20 text-2xl'
                    onClick={() => goToSlide(currentIndex + 1)}>
                <span className='hidden lg:block'>{nextCocktail.name}</span>
                <img src={nextArrow} alt="" />
            </button>
         </div>

         {/* image */}
         <div className='mx-auto mt-30'>
            <img src={currentCocktail.image} alt="" className='object-contain h-[60vh] cocktail-img'/>
         </div>

         {/* Recipe */}
         <div className='flex flex-col lg:flex-row absolute justify-between w-full gap-9 lg:gap-10 bottom-0 lg:items-end translate-y-60 lg:translate-y-0'>
            <div className='space-y-2'>
                <h2 className='text-sm'>Recipe for: </h2>
                <p className='text-2xl md:text-5xl md:w-1/2 text-yellow-200 Mtitle'>{currentCocktail.name}</p>
            </div>

            <div className='lg:max-w-sm space-y-4 details'>
                <h2 className='text-2xl md:text-4xl'>{currentCocktail.title}</h2>
                <p className='libre-baskerville-min'>{currentCocktail.description}</p>
            </div>
         </div>
       </div>

    </section>
  )
}

export default Menu