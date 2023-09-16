import Link from 'next/link'
import Image from 'next/image'

import BlurBox from "../BlurBox/BlurBox";

const Header = () => {

    return (
        <div id="header">

            {/* ------ Header Navigation bar ------ */}
            <Link href='/' >Logo Home</Link>
            <Link href="/phim-moi/1" >Phim mới</Link>
            <Link href="/chieu-rap/1" >Phim chiếu rạp</Link>
            <Link href="/phim-le/1" >Phim lẻ</Link>
            <Link href="/phim-bo/1" >Phim bộ</Link>
            <Link href="/hoat-hinh/1" >Hoạt hình</Link>

        </div>
    );
};

export default Header;

