
import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { SaveProvider } from '@/contexts/saveContext'
import SavedButton from '@/components/SavedButton/SavedButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: {
        default: 'JoyFilm',
    },
    description: 'Website xem phim trực tuyến miễn phí, chất lượng cao và không quảng cáo',
    keywords: ['phim', 'joyfilm', 'myjoyfilm', 'xem phim', 'phim trực tuyến', 'phim mới', 'phim lẻ', 'phim bộ', 'phim hoạt hình', 'phim anime'],
    generator: 'Next.js',
    applicationName: 'JoyFilm',
    authors: [{ name: 'The Nghia' }, { name: 'The Nghia', url: 'https://github.com/dothenghia' }],
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>

                {/* ------ Header Navigation Bar ------ */}
                <Header />

                <SaveProvider>
                    {/* Bookmark Icon */}
                    <div className="fixed bottom-10 left-7 xl:left-[calc((100%-1152px-100px)/2)] z-50">
                        <SavedButton />
                    </div>

                    {/* ------ Child route rendering ------ */}
                    {children}
                </SaveProvider>

                {/* ------ Footer ------ */}
                <Footer />

            </body>
        </html>
    )
}
