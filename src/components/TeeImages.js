import { useRef, useEffect } from "react"


import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


import Image from 'next/image'
import teeImages from '../styles/TeeImages.module.scss'



const TeeImages = () => {

    let animateThis1 = useRef(null);
    let animateThis2 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.to( animateThis1, {
            scrollTrigger: {
                trigger: '.feature1', 
                scrub: 1,
            },
            duration: 2,
            x: '-10',
            y: '60',
            ease: "ease-in",
        }),
        gsap.to( animateThis2, {
            scrollTrigger: {
                trigger: '.feature1', 
                scrub: 1,
            },
            duration: 2,
            x: '10',
            y: '-20',
            ease: "ease-in",
        })
    }, [])
    
    return (
    <div className={`${teeImages.teeMain} sixty feature1`}>
        <div 
            className={`${teeImages.outerBorder} ${teeImages.teeImg1}`}
            ref={el => {animateThis1 = el}}
        >
        <Image
            src="/Picnic-Tees-3.jpg"
            alt="Picnic Basket Tees"
            
            fill
            sizes="(max-width: 768px) 668px,
              (max-width: 1200px) 700px,
              400px"
        />
        </div>
        <div 
            className={`${teeImages.outerBorder} ${teeImages.teeImg2}`}
            ref={el => { animateThis2 = el }}
        >
        <Image
            src="/Picnic-Tees-4.jpg"
            alt="Picnic Basket More Tees"
            
            fill
            sizes="(max-width: 768px) 568px,
              (max-width: 1200px) 568px,
              400px"
        />
        </div>
    </div>
    )
}

export default TeeImages