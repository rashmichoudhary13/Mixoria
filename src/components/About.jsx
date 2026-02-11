import React, { useRef } from 'react'
import MagicBento from '../../Reactbits/MagicBento'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const About = () => {

    const aboutRef = useRef();

    useGSAP(() => {
        const titleSplit = new SplitText('.about_title', { type: 'lines' });

        const scrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: aboutRef.current,
                start: 'top 70%'
            }
        })

        scrollTimeline
            .from(titleSplit.lines, {
                opacity: 0,
                yPercent: 150,
                duration: 0.8,
                stagger: 0.2,
                ease: 'expo.out',
            })
            .from('.image-box', {
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
            },'-=0.8')
    },[]) 

    return (
        <section ref={aboutRef} className='py-15 mx-7 md:mx-20'>

            {/* Written Section  */}
            <div className='grid lg:grid-cols-2 items-start w-full py-10'>
                <div className='space-y-5 max-w-lg md:max-w-xl'>
                    <button className='bg-white text-black py-2 px-4 rounded-full font-semibold'>Best Cocktails</button>
                    <h1 className='text-3xl md:text-5xl py-5 about_title tracking-tight '>Where every detail matters-from muddle to garnish</h1>
                </div>

                <div className='justify-self-end lg:max-w-md '>
                    <p className='text-lg mb-10'>Every cocktail we serve is a reflection of our obsession with detail — from the first
                        muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                    <p className='text-3xl font-bold mb-2'>
                        <span className='text-5xl font-bold text-yellow-200'>4.5</span>/5</p>
                    <p className='text-sm'>More than +12000 customers</p>
                </div>
            </div>

            {/* Image Section  */}
            <div className='image-box w-full'>
                <MagicBento
                textAutoHide={true}
                enableStars
                enableSpotlight
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={false}
                clickEffect
                spotlightRadius={400}
                particleCount={12}
                glowColor="132, 0, 255"
                disableAnimations={false}
            />
            </div>
        </section>
    )
}

export default About