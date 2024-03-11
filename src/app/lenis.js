'use client'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function Lenis({ children }) {
    const lenis = useLenis(({ scroll }) => {})

    return <ReactLenis root>{children}</ReactLenis>
}
