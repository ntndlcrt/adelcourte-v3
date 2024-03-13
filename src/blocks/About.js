'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

import '@/styles/blocks/_about.scss'

export default function About() {
    const refHappy = useRef()
    gsap.registerPlugin(useGSAP)

    useGSAP(() => {
        const linesInners = document.querySelectorAll('.line__inner')

        const tl = gsap.timeline({
            defaults: {
                ease: 'power3.out',
            },
        })

        gsap.set(linesInners, {
            yPercent: 105,
        })

        tl.to(linesInners, {
            yPercent: 0,
            stagger: 0.3,
            duration: 0.8,
        })

        return tl
    })

    useGSAP(() => {
        const happy = refHappy.current
        const happySpans = happy.querySelectorAll('span')

        gsap.set(happySpans, {
            yPercent: 50,
        })

        const tl = gsap.timeline({
            defaults: {
                ease: 'power3.out',
            },
            repeat: -1,
            onComplete: () => {
                gsap.set(happySpans, {
                    yPercent: 50,
                })
            },
        })

        happySpans.forEach((span) => {
            tl.to(
                span,
                {
                    yPercent: -50,
                    duration: 1,
                },
                '<'
            )

            tl.to(span, {
                yPercent: -150,
                duration: 1,
                delay: 2,
            })
        })
    })

    return (
        <section className="about">
            <div className="line">
                <div className="line__inner">
                    <span className="symbol --off">&copy;</span>
                    <p>Antoine Delcourte</p>
                    <div className="separator" />
                    <p>Creative Developer</p>
                </div>
            </div>
            <div className="line">
                <div className="line__inner --center">
                    <p>Based in</p>
                    <span className="symbol --spacer">&#x2192;</span>
                    <p>Lille, France</p>
                    <div className="spacer --big" />
                </div>
            </div>
            <div className="line">
                <div className="line__inner">
                    <div>
                        <span className="symbol --off">&#10036;</span>
                        <span style={{ fontStyle: 'italic' }}>learn</span>
                    </div>
                    <div className="spacer --small" />
                    <div>
                        <span className="symbol --off">&#10036;</span>
                        <span style={{ fontStyle: 'italic' }}>share</span>
                    </div>
                    <div className="spacer --small" />
                    <div>
                        <span className="symbol --off">&#10036;</span>
                        <span style={{ fontStyle: 'italic' }}>discover</span>
                    </div>
                    <span className="separator" />
                    <p>new things</p>
                </div>
            </div>
            <div className="line">
                <div className="line__inner --end">
                    {/* <div className="spacer" /> */}
                    <span className="symbol">∞</span>
                    <p>Always looking for new challenges</p>
                </div>
            </div>
            <div className="line">
                <div className="line__inner">
                    <p>Your idea</p>
                    <span className="symbol --off --big">&#x2192;</span>
                    <p>My tech</p>
                    <span className="symbol --off --big">&#x2192;</span>
                    <p>Our success</p>
                </div>
            </div>
            <div className="line">
                <div className="line__inner --center">
                    <p>I'm a TOEIC, Voltaire & Opquast holder</p>
                </div>
            </div>
            <div className="line">
                <div className="line__inner">
                    <div className="spacer" />
                    <p>Happy with</p>
                    <div className="separator" />
                    <div ref={refHappy} className="happy">
                        <span>coffee</span>
                        <span>reptiles</span>
                        <span>music</span>
                        <span>hiking</span>
                        <span>books</span>
                        <span>movies</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
