import React, { useState, useRef, useEffect } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const nav = [
    {
        title: "Cocktatils",
        href: "#about"
    },
    {
        title: "About Us",
        href: "#travel"
    },
    {
        title: "The Art",
        href: "#news"
    },
    {
        title: "Contact",
        href: "#review"
    },
]

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const menuRef = useRef(null);

    useGSAP(() => {
        if (open) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.6,
                ease: "power3.out",
            })
            gsap.fromTo(
                ".stagger",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    delay: 0.7,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: "power3.out",
                }
            );

        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.6,
                ease: "power3.in",
            })
        }
    }, [open])

    return (
        <>
            <div className='py-4 px-3 md:px-20 flex justify-between'>
                <div className='text-2xl font-bold'>
                    Velvet Pour
                </div>

                <div onClick={() => setOpen(true)}>
                    <FiMenu size={35} className='cursor-pointer' />
                </div>
            </div>

            {/* Menu  */}
            <div ref={menuRef} className='fixed top-0 right-0 bg-white h-screen w-60 md:w-1/2 text-black z-10 translate-x-full'>
                <div className='relative'>
                    <FiX onClick={() => setOpen(false)} size={35} className='absolute right-1 md:right-5 cursor-pointer font-bold m-5' />

                    <ul className='text-2xl md:text-7xl px-8 md:px-27 py-10'>
                        {
                            nav.map((item) => (
                                <li className='my-15 opacity-0 stagger' key={item.title}>
                                    <a href=""> {item.title} </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar