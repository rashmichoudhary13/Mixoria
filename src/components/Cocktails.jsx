import React from 'react'
import { CLeftLeaf, CRightLeaf } from '../assets/constants/pic';
import { cocktailLists, mockTailLists } from '../assets/constants/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Cocktails = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            }
        })

        tl
        .from('.c-left-leaf', {
            x:-100,
            y:100
        })
        .from('.c-right-leaf', {
            x:120,
            y:120,
          
        })
    },[])

  return (
    <section id="cocktails" className='relative min-h-dvh w-full pt-10 md:pt-30 overflow-hidden'>

        {/* Leaf images */}
        <img src={CLeftLeaf} alt="" className='w-1/3 md:w-fit absolute left-0 md:bottom-0 -top-10 md:top-auto c-left-leaf'/>
        <img src={CRightLeaf} alt="" className='w-1/3 md:w-fit absolute right-0 bottom-0 c-right-leaf'/>

        <div className='flex flex-col md:flex-row justify-between mx-3 md:mx-10 pt-10 md:pt-0'> 
            {/* Most Popular Cocktail */}
            <div>
                <h2 className='text-xl font-semibold py-10'>Most popular cocktails:</h2>
                <ul>
                    {
                        cocktailLists.map(drink => (
                            <li key={drink.name} className='flex items-start justify-between space-y-6'>
                                <div className='lg:me-28 leading-9'>
                                    <h2 className='text-lg text-yellow-100 '> {drink.name} </h2>
                                    <p className='text-sm'>{drink.country} | {drink.detail}</p>
                                </div>
                                <span className='text-lg w-16 text-right'>-{drink.price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Most Loved Cocktail */}
            <div>
                <h2 className='text-xl font-semibold py-10'>Most loved mocktails:</h2>
                <ul>
                    {
                        mockTailLists.map(drink => (
                            <li key={drink.name} className='flex items-start justify-between space-y-6'>
                                <div className='lg:me-28 leading-9'>
                                    <h2 className='text-lg text-yellow-100 '> {drink.name} </h2>
                                    <p className='text-sm'>{drink.country} | {drink.detail}</p>
                                </div>
                                <span className='text-lg w-16 text-right'>-{drink.price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    </section>
  )
}

export default Cocktails