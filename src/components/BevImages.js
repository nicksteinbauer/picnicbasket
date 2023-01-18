import { useRef, useEffect } from "react"


import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


import Image from 'next/image'
import teeImages from '../styles/TeeImages.module.scss'



const BevImages = () => {

    let bevThis1 = useRef(null);
    let bevThis2 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.to( bevThis1, {
            scrollTrigger: {
                trigger: '.bev1', 
                scrub: 1,
            },
            duration: 2,
            x: '-10',
            y: '60',
            ease: "ease-in",
        }),
        gsap.to( bevThis2, {
            scrollTrigger: {
                trigger: '.bev1', 
                scrub: 1,
            },
            duration: 2,
            x: '20',
            y: '40',
            ease: "ease-in",
        })
    }, [])
    
    return (
    <div className={`${teeImages.bevMain} sixty bev1`}>
        <div 
            className={`${teeImages.outerBorder} ${teeImages.bevImg1}`}
            ref={el => {bevThis1 = el}}
        >
        <Image
            src="/Picnic-Bev-1.jpg"
            alt="Picnic Basket Beverages"
            fill
            sizes="(max-width: 768px) 668px,
              (max-width: 1200px) 700px,
              400px"
        />
        </div>
        <div 
            className={`${teeImages.outerBorder} ${teeImages.bevImg2}`}
            ref={el => { bevThis2 = el }}
        >
        <Image
            src="/Picnic-Bev-2.jpg"
            alt="Picnic Basket More Beer"
            fill
            sizes="(max-width: 768px) 568px,
              (max-width: 1200px) 568px,
              400px"
        />
        </div>
    </div>
    )
}

export default BevImages