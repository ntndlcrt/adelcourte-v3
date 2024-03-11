import '@/styles/app.scss'

import Cursor from '@/components/Cursor'
import Lenis from './lenis'

export const metadata = {
    title: 'Antoine Delcourte',
    description:
        'Creative developer based in Lille, France. Open to new work opportunities. adelcourte.pro@gmail.com',
    metadataBase: new URL('https://adelcourte.com'),
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Lenis>
                    <Cursor />
                    {children}
                </Lenis>
            </body>
        </html>
    )
}
