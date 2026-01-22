import React from 'react'
import { storeInfo, openingHours } from '../assets/constants/data'
import { footerLeftLeaf, footerRightLeaf, footerimg,fb, x,insta } from '../assets/constants/pic'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Footer = () => {
  useGSAP(() => {
    const splitTitle = SplitText.create('.title', {type: 'words'});

    const footerTimeline = gsap.timeline({
      scrollTrigger:{
        trigger: '#footer',
        start: 'top center',
      },
      ease: 'power1.inOut'
    })

    footerTimeline
    .from(splitTitle.words, {
      yPercent: 100, opacity: 0, stagger: 0.02
    })
     .from('#footer h3, #footer p', {
      yPercent: 100, opacity: 0, stagger: 0.02,
    })
    .to('.footerRightLeaf', {
      yPercent: '-16', duration: 1, ease: 'power1.inOut',
    })
    .to('.footerLeftLeaf', {
      yPercent: '-10', duration: 1, ease: 'power1.inOut',
    },'<')
    .from('.footerDrink', {
      opacity: 0, duration: 1, 
    },"-=0.7")

  })

  return (
    <footer className='radial-gradient relative mb-10 overflow-hidden mt-90 md:mt-0' id="footer">

      <img src={footerLeftLeaf} alt="" className='absolute left-0 -bottom-10 footerLeftLeaf w-25 md:w-fit'/>
      <img src={footerRightLeaf} alt="" className='absolute right-0 top-0 footerRightLeaf w-25 md:w-fit' />
      <img src={footerimg} alt="" className='absolute right-10 bottom-5 w-25 md:w-50 footerDrink' />

      <div className='text-center space-y-15 mt-20 libre-baskerville-min'>
        <h2 className='text-3xl md:text-6xl libre-baskerville title'>{storeInfo.heading}</h2>

        <div>
          <p className='mb-4'>VISIT OUR BAR</p>
          <p className='md:text-2xl'>{storeInfo.address}</p>
        </div>

        <div className='space-y-2'>
          <h3>CONTACT US</h3>
          <p className='md:text-2xl'>{storeInfo.contact.phone}</p>
          <p className='md:text-2xl'>{storeInfo.contact.email}</p>
        </div>

        <div>
          <h3 className='text-sm mb-2'>OPEN EVERY DAY</h3>
          {
            openingHours.map(open => (
              <p key={open.day} className='md:text-2xl'>{open.day} : {open.time}</p>
            ))
          }
        </div>

        <div>
          <h3 className='mb-4'>SOCIALS</h3>
          <div className='flex gap-6 w-31 h-6 mx-auto'>
            <img src={fb} alt="" className=' object-contain'/>
            <img src={x} alt="" />
            <img src={insta} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer