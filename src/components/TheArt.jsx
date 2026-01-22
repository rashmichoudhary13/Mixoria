import React from 'react'
import { featureLists, goodLists } from '../assets/constants/data'
import { check, under_img } from '../assets/constants/pic'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'

const TheArt = () => {
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';  

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true,
            }
        })

        tl
        .to('.will-fade', {
            opacity: 0,
            stagger: 0.2,
            ease: 'power1.inOut',
        })
        .to('.masked-img', {
            scale: 1.3,
            maskSize: '400%',
            maskPosition: 'center',
            duration: 1.5,
            ease: 'power1.inOut',
        })
        .to('#masked-content', {
            opacity: 1,
            stagger: 0.3,
            duration: 1,
            ease: 'power1.inOut',
        })
    })

    return (
        <section id='art'>
            <div className='min-h-dvh text-center relative radial-gradient'>
                <h2 className='text-[15vw] relative text-[#505050] md:pt-15 will-fade'>The ART</h2>

                <div className='flex flex-col md:flex-row gap-10 justify-between mx-8 lg:mx-20 mt-45 lg:mt-10'>
                    <ul className='will-fade space-y-4'>
                        {
                            featureLists.map((data,index) => (
                                <li key={index} className='flex items-center gap-3'>
                                    <img src={check} alt="" className='w-3 md:w-fit'/>
                                    <p className='text-xs md:text-sm'>{data}</p>
                                </li>
                            ))
                        }
                    </ul>

                    <div className='w-full h-[40vh] lg:w-[55vw] lg:h-[65vh] rounded-4xl absolute top-[5%] sm:top-[20%] lg:top-[30%] -translate-y-[30%] left-1/2 -translate-x-1/2 overflow-hidden'>
                        <img
                            src={under_img}
                            alt="cocktail"
                            className='masked-img size-full rounded-4xl object-contain absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
                    </div>

                    <ul className='will-fade space-y-4'>
                        {
                            goodLists.map((data,index) => (
                                <li key={index} className='flex items-center gap-3'>
                                    <img src={check} alt="" className='w-3 md:w-fit'/>
                                    <p className='text-xs md:text-sm'>{data}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div id='masked-content' className='opacity-0 space-y-3 mx-5 lg:mx-0 mt-10 lg:mt-20 xl:mt-25'>
                        <h3 className='text-xl md:text-4xl text-center'>Made with Craft, Poured with Passion</h3>
                        <p className='text-sm w-70 mx-auto md:w-auto md:mx-0'>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                </div>

                <div className='-mt-15'>
                    <h2 className='will-fade text-3xl text-center'> Sip-worthy Perfection </h2>
                </div>

                
            </div>
        </section>
    )
}

export default TheArt