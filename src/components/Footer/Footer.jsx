
import Link from "next/link";

const Footer = () => {
    return (
        <div className='bg-stone-950 pt-6 pb-10 sm:py-8'>
            <div className='section-container-no-py flex flex-col-reverse sm:flex-row items-center justify-between'>
                <Link href="/" className="flex items-center mt-8 sm:mt-0">
                    <img src='/logo.png' className="h-11 mr-2" alt="Logo" />
                    <img src='/joyfilm.png' className="h-10" alt="JoyFilm" />
                </Link>
                <div className='flex w-full justify-evenly sm:w-auto items-center'>
                    <Link href='/gioi-thieu' className='footer-link'>Giới thiệu</Link>
                    <Link href='https://github.com/dothenghia/JoyFilm-Web' target='_blank' className='footer-link'>Github</Link>
                    <Link href='https://github.com/dothenghia/JoyFilm-Server' target='_blank' className='footer-link'>API</Link>
                    <Link href='/gioi-thieu' className='footer-link'>Liên hệ</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
