import localFont from 'next/font/local'
import { GeistSans } from 'geist/font/sans'

import '@/styles/app.scss'

import Lenis from './lenis'

const neuething = localFont({
    src: [
        {
            path: '../fonts/NeuethingSans-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/NeuethingSans-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/NeuethingSans-SemiBold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/NeuethingSans-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/NeuethingSans-ExtraBold.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../fonts/NeuethingSans-Black.otf',
            weight: '900',
            style: 'normal',
        },
    ],
    subsets: ['latin'],
})

export const metadata = {
    title: 'Antoine Delcourte',
    description:
        'Creative developer based in Lille, France. Open to new work opportunities. adelcourte.pro@gmail.com',
    metadataBase: new URL('https://adelcourte.com'),
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={neuething.className}>
            <body>
                <Lenis>{children}</Lenis>
            </body>
        </html>
    )
}
