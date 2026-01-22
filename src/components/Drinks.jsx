import React from 'react'
import SummerCocktail from '../model/SummerCocktail'

const Drinks = () => {
    return (
        <section className='min-h-dvh'>
            <div className='text-center my-10'>
                <h2 className='text-5xl'> WHY OUR DRINKS? </h2>
                <p className='text-sm'>Crafted With Purpose. Served With Passion. </p>
            </div>

            <div className='grid grid-cols-2 gap-10'>
                {/* Content */}
                <div className='bg-red-500 w-50 h-50'>

                </div>

                {/* Model  */}
                <figure className='p-5 h-full'>
                    <div >
                        <SummerCocktail/>
                    </div>
                </figure>
            </div>

        </section>
    )
}

export default Drinks