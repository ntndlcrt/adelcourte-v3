import '@/styles/pages/_home.scss'

import Available from '@/components/Available'
import About from '@/blocks/About'
import Infos from '@/blocks/Infos'

export default function Home() {
    return (
        <main className="home">
            <Available />
            <About />
            <Infos />
        </main>
    )
}
