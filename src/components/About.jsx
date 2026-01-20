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
                duration: 1,
                stagger: 0.4,
                ease: 'expo.out',
            })
            .from('.image-box', {
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
            },'-=0.8')
    },[]) 

    return (
        <section ref={aboutRef} className='pt-15 mx-20'>

            {/* Written Section  */}
            <div className='grid grid-cols-2 items-start w-full py-10'>
                <div className='space-y-5 max-w-xl'>
                    <button className='bg-white text-black py-2 px-4 rounded-full font-semibold'>Best Cocktails</button>
                    <h1 className='text-5xl pt-5 about_title'>Where every detail matters-from muddle to garnish</h1>
                </div>

                <div className='justify-self-end max-w-md '>
                    <p className='text-lg mb-10'>Every cocktail we serve is a reflection of our obsession with detail — from the first
                        muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                    <p className='text-3xl font-bold mb-2'>
                        <span className='text-5xl font-bold text-yellow-100'>4.5</span>/5</p>
                    <p>More than +12000 customers</p>
                </div>
            </div>

            {/* Image Section  */}
            <div className='image-box w-full min-w-3xl'>
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