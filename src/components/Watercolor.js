import { useRef, useEffect } from "react"


import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


import Image from 'next/image'
import watercolor from '../styles/Watercolor.module.scss'



const Watercolor = () => {

    let animateLogo = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.to( animateLogo, {
            scrollTrigger: {
                trigger: '.logo1', 
                scrub: 1,
            },
            duration: 2,
            x: '30',
            y: '80',
            ease: "ease-in",
        })
    }, [])
    
    return (
    <div className={`${watercolor.aboutImage} sixty logo1`}>
        <div 
            className={`${watercolor.aboutImg1}`}
            ref={el => {animateLogo = el}}
        >
        <Image
            src="/PicnicWatercolor.png"
            alt="Picnic Basket Watercolor"
            fill
            sizes="(max-width: 768px) 668px,
              (max-width: 1200px) 700px,
              400px"
        />
        </div>
        
    </div>
    )
}

export default Watercolor