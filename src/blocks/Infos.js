'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import { useRef } from 'react'
import Link from 'next/link'

import '@/styles/blocks/_infos.scss'

export default function Infos() {
    const refText = useRef()

    useGSAP(() => {
        const splitLines = new SplitType(refText.current, {
            types: 'lines',
            linesClass: 'line',
        })

        refText.current.querySelectorAll('.line').forEach((line) => {
            const innerLine = document.createElement('p')
            innerLine.classList.add('line__inner')
            innerLine.innerHTML = line.innerHTML
            line.innerHTML = ''
            line.appendChild(innerLine)

            gsap.set(line.querySelector('.line__inner'), {
                yPercent: 100,
            })
        })

        const tl = gsap.timeline({
            ease: 'expo.inOut',
            delay: 2.5,
        })

        tl.to(refText.current.querySelectorAll('.line__inner'), {
            duration: 0.3,
            yPercent: 0,
            stagger: 0.2,
        })

        return tl
    })

    useGSAP(() => {
        const links = document.querySelectorAll('.links span')

        gsap.set(links, {
            yPercent: 50,
            opacity: 0,
        })

        const tl = gsap.timeline({
            ease: 'expo.inOut',
            delay: 3.5,
        })

        tl.to(links, {
            duration: 0.3,
            yPercent: 0,
            opacity: 0.3,
            stagger: 0.2,
        })

        return tl
    })

    useGSAP(() => {
        const button = document.querySelector('.button')

        gsap.set(button, {
            yPercent: 100,
            opacity: 0,
        })

        const tl = gsap.timeline({
            ease: 'expo.inOut',
            delay: 4,
        })

        tl.to(button, {
            duration: 0.3,
            yPercent: 0,
            opacity: 1,
        })

        return tl
    })

    return (
        <section className="infos">
            <p ref={refText}>
                Graduated in web development at ECV School in Lille, France of a
                master degree, I'm a creative developer working mainly with
                Sass, Next.js and GSAP. I also enjoy using Framer Motion. After
                working for 3 years on classic wordpress websites, I'm now
                focusing on animations driven designs and headless CMS. What I
                love most about my job is making a designer's vision come true
                with modern code.
            </p>
            <div className="links">
                <span>_about (coming soon)</span>
                <span>_projects (coming soon)</span>
                <span>_lab (coming soon)</span>
            </div>
            <Link
                href="https://www.linkedin.com/in/adelcourte/"
                target="_blank"
            >
                <button className="button">
                    <p>Let's talk</p>
                    <div className="button__inner">
                        <p>Let's talk</p>
                        <div className="bg"></div>
                    </div>
                </button>
            </Link>
        </section>
    )
}
