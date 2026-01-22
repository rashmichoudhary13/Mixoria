import React, { useRef } from 'react'
import { heroLeftLeaf, heroRightLeaf } from '../assets/constants/pic';
import heroVideo from "../assets/videos/output.mp4";
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {

  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    
    const heroSplit = SplitText.create('.headTitle', { type: 'chars, words' });
    const paragraphSplit = SplitText.create('.subtitle', { type: 'lines' });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.06,
    })

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      delay: 0.6,
      stagger: 0.06,
      ease: 'expo.out'
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
      .to('.leftLeaf', { y: -200 }, 0)
      .to('.rightLeaf', { y: 200 }, 0)

    const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "120% top" : "bottom top";
	
	let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: 0.3,
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};

  }, [])

  return (
    <>
      <section className='relative mt-8 min-h-dvh z-10' id="hero">
        <h1 className='text-7xl md:text-[12vw] text-center headTitle'> DAIQUIRI </h1>

        <img src={heroLeftLeaf} alt="" className='w-25 md:w-fit absolute bottom-10 md:top-8 xl:top-24 2xl:top-40 md:bottom-auto leftLeaf' />
        <img src={heroRightLeaf} alt="" className='w-25 md:w-auto absolute right-0 top-50 md:top-0 pointer-events-none rightLeaf' />

        <div className='container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-40 flex justify-between items-end px-5'>
          <div className='flex justify-between w-full gap-10 items-end mx-auto'>
            <div className='hidden md:block'>
              <p>Cool. Crisp. Classic</p>
              <p className='text-yellow-100 text-3xl md:text-5xl font-bold md:leading-15 w-90 subtitle'>Sip the Spirit of Summer</p>
            </div>

            <div className='py-10 md:py-0 space-y-5 md:text-lg max-w-2xl md:max-w-xs font-bold'>
              <p className='subtitle'>Every cocktail on our menu is a
                blend of premium ingredients,
                creative flair, and timeless recipes
                - designed to delight your senses.</p>
              <a href="">View cocktails</a>
            </div>
          </div>
        </div>

      </section>

      <div className='absolute inset-0 -z-10'>
        <video
          ref={videoRef}
          src={heroVideo}
          muted
          playsInline
          preload="auto"
          className='w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 object-cover md:object-contain'
        />
      </div>
      
    </>
  )
}

export default Hero