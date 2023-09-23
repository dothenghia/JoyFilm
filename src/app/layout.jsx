import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Trang chủ | JoyFilm',
    description: 'Website xem phim trực tuyến miễn phí, chất lượng cao và không quảng cáo',
    keywords: ['phim', 'xem phim', 'phim trực tuyến', 'phim mới', 'phim lẻ', 'phim bộ', 'phim hoạt hình', 'phim anime'],
    generator: 'Next.js',
    applicationName: 'JoyFilm',
    authors: [{ name: 'The Nghia' }, { name: 'The Nghia', url: 'https://github.com/dothenghia' }],
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
