import React from 'react'
import SummerCocktail from '../model/SummerCocktail'
import {
  GiOrangeSlice,
  GiHerbsBundle 
} from "react-icons/gi";
import { FaDiceD6, FaCocktail  } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Drinks = () => {
    return (
        <section className='min-h-dvh mb-30' id="Promise">
            <div className='text-center my-10'>
                <h2 className='text-3xl lg:text-5xl font-bold'> WHY OUR DRINKS? </h2>
                <p className='text-xs lg:text-sm'>Crafted With Purpose. Served With Passion. </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 mx-5 md:mx-30 lg:mx-10'>
                {/* Content */}
                <div className='order-2 lg:order-1 mt-10 lg:mt-35 lg:pl-40 flex flex-col gap-10 h-[50vh] no-scrollbar overflow-y-auto'>


                    <div className='space-y-3'>
                        <h2 className='text-2xl lg:text-3xl text-yellow-200 flex gap-5'> 
                            <span className='text-orange-300'> <GiOrangeSlice/> </span> 
                            Fresh Ingredients Only </h2>
                        <p className='text-sm lg:text-base'>We believe great drinks start with great ingredients. 
                            That’s why we use only handpicked fruits, fresh herbs, and naturally sourced 
                            components in every recipe. Each sip delivers authentic flavor, natural aroma, and a vibrant 
                            freshness you can taste from the very first pour to the last drop.</p>
                    </div>

                    <div className='space-y-3'>
                        <h2 className='text-xl lg:text-3xl text-yellow-200 flex gap-5'> 
                            <span className='text-blue-300'> <FaDiceD6 /> </span> 
                            Perfectly Balanced Flavors </h2>
                        <p className='text-sm lg:text-base'>Our drinks are crafted to strike the perfect balance — never too 
                            sweet, never too sharp. Every blend is thoughtfully composed to highlight citrus brightness, 
                            smooth undertones, and refreshing finishes, ensuring a flavor profile that feels refined,
                            satisfying, and effortlessly enjoyable.</p>
                    </div>

                    <div className='space-y-3'>
                        <h2 className='text-2xl lg:text-3xl text-yellow-200 flex gap-5'> 
                            <span className='text-green-300'> <GiHerbsBundle /> </span> 
                            No Artificial Additives </h2>
                        <p className='text-sm lg:text-base'>What you see is what you taste — nothing more, nothing less. 
                            We never use artificial colors, synthetic flavors, or chemical preservatives. Every drink stays true to nature, 
                            offering a clean, honest experience that lets real ingredients shine without compromise.</p>
                    </div>

                    <div className='space-y-3'>
                        <h2 className='text-2xl lg:text-3xl text-yellow-200 flex gap-5'> 
                            <span className='text-orange-300'> <FaCocktail/> </span> 
                            Crafted Daily </h2>
                        <p className='text-sm lg:text-base'>Freshness isn’t optional — it’s our standard. Our drinks are prepared daily 
                            in small batches to maintain peak quality, consistency, and taste. This hands-on approach ensures every 
                            serving meets our highest standards, just as it was meant to be enjoyed.</p>
                    </div>

                    <div className='space-y-3'>
                        <h2 className='text-xl lg:text-3xl text-yellow-200 flex gap-5'> 
                            <span className='text-blue-300'> <BsStars/> </span> 
                            Designed for Every Moment </h2>
                        <p className='text-sm lg:text-base'>From laid-back afternoons to celebratory evenings, our drinks are made to fit 
                            seamlessly into your lifestyle. Whether you’re unwinding, socializing, or simply craving something refreshing, 
                            each drink is designed to elevate the moment with effortless flavor and style.</p>
                    </div>
                </div>

                {/* Model  */}
                <figure className='order-1 lg:order-2 h-[50vh] sm:h-[60vh] lg:h-[80vh]'>
                    <SummerCocktail />
                </figure>
            </div>

        </section>
    )
}

export default Drinks