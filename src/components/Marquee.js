'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

export default function Marquee({ text, fontSize }) {
    const refFirstText = useRef(null)
    const refSecondText = useRef(null)
    const refMarqueeText = useRef(null)

    let xPercent = 0
    let direction = -1

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.to(refMarqueeText.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e) => (direction = e.direction * -1),
            },
            x: '-100px',
        })

        requestAnimationFrame(animate)
    })

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0
        } else if (xPercent > 0) {
            xPercent = -100
        }

        gsap.set(refFirstText.current, { xPercent: xPercent })
        gsap.set(refSecondText.current, { xPercent: xPercent })

        requestAnimationFrame(animate)

        xPercent += 0.1 * direction
    }

    return (
        <div className="marquee">
            <div className="marquee__text" ref={refMarqueeText}>
                <p ref={refFirstText}>{text}</p>
                <p ref={refSecondText}>{text}</p>
            </div>
        </div>
    )
}
