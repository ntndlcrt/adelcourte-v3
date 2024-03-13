'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function Available() {
    const refTag = useRef()

    useGSAP(() => {
        gsap.set(refTag.current, {
            yPercent: -100,
            opacity: 0,
        })

        const tl = gsap.timeline({
            ease: 'expo.inOut',
            delay: 5,
        })

        tl.to(refTag.current, {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
        })

        return tl
    })

    return (
        <div className="tag --available" ref={refTag}>
            Available for work
        </div>
    )
}
