import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'JoyFilm',
    description: 'Website xem phim trực tuyến miễn phí, chất lượng cao và không quảng cáo',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>

                <Header />

                {children}

                <Footer />
                
            </body>
        </html>
    )
}
