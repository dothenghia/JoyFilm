
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className='bg-stone-950 pt-6 pb-10 sm:py-8'>
            <div className='section-container-no-py flex flex-col-reverse sm:flex-row items-center justify-between'>
                <Link href="/" className="flex items-center mt-4 sm:mt-0">
                    <Image src='/logo.png'
                        alt="Logo"
                        width={44}
                        height={44}
                        quality={100}
                        loading="lazy"
                        className="mr-2"
                    />
                    <Image src='/joyfilm.png'
                        alt="JoyFilm"
                        width={120}
                        height={40}
                        quality={100}
                        loading="lazy"
                    />
                </Link>
                <div className='flex flex-col sm:flex-row w-full justify-evenly sm:w-auto items-center'>
                    <Link href='/gioi-thieu' className='footer-link'>Giới thiệu</Link>
                    <Link href='https://github.com/dothenghia/JoyFilm' target='_blank' className='footer-link'>Github</Link>
                    <Link href='https://github.com/dothenghia/JoyFilm-Server' target='_blank' className='footer-link'>API</Link>
                    <Link href='/gioi-thieu' className='footer-link'>Liên hệ</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
